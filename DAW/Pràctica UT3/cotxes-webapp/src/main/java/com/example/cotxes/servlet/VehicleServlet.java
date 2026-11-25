package com.example.cotxes.servlet;

import com.example.cotxes.dao.VehicleDAO;
import com.example.cotxes.dao.ModelDAO;
import com.example.cotxes.model.Vehicle;
import com.example.cotxes.model.Model;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

@WebServlet("/vehicles")
public class VehicleServlet extends HttpServlet {

    private VehicleDAO vehicleDAO;
    private ModelDAO modelDAO;          // 👉 DAO per als models
    private static final String DEFAULT_ACTION = "list";

    @Override
    public void init() throws ServletException {
        vehicleDAO = new VehicleDAO();
        modelDAO = new ModelDAO();      // 👉 inicialitzem ModelDAO
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset=UTF-8");

        String action = request.getParameter("action");
        if (action == null) {
            action = DEFAULT_ACTION;
        }

        switch (action) {
            case "new":
                showForm(request, response, null);
                break;
            case "edit":
                editForm(request, response);
                break;
            case "delete":
                deleteVehicle(request, response);
                break;
            default:
                listVehicles(request, response);
        }
    }

    private void listVehicles(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        List<Vehicle> vehicles = vehicleDAO.findAll();
        request.setAttribute("vehicles", vehicles);
        request.getRequestDispatcher("vehicles.jsp").forward(request, response);
    }

    /**
     * Mostra el formulari de nou/edició vehicle.
     * Sempre carrega també la llista de models per al desplegable.
     */
    private void showForm(HttpServletRequest request, HttpServletResponse response, Vehicle vehicle)
            throws ServletException, IOException {

        // 👉 Carreguem tots els models per omplir el <select>
        List<Model> models = modelDAO.findAll();
        request.setAttribute("models", models);

        // vehicle pot ser null (cas "nou") o tenir dades (cas "edit")
        request.setAttribute("vehicle", vehicle);

        request.getRequestDispatcher("vehicle-form.jsp").forward(request, response);
    }

    private void editForm(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        Vehicle v = vehicleDAO.findById(id);
        showForm(request, response, v);
    }

    private void deleteVehicle(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        vehicleDAO.delete(id);
        // redirecció segura amb contextPath
        response.sendRedirect(request.getContextPath() + "/vehicles");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset=UTF-8");

        String idStr = request.getParameter("id");
        String vin = request.getParameter("vin");
        String anyStr = request.getParameter("anyFabricacio");
        String color = request.getParameter("color");
        String idModelStr = request.getParameter("idModel");

        int any = Integer.parseInt(anyStr);
        int idModel = Integer.parseInt(idModelStr);

        if (idStr == null || idStr.isEmpty()) {
            // INSERT
            Vehicle v = new Vehicle(vin, any, color, idModel);
            System.out.println("[VehicleServlet] INSERT -> " + v);
            vehicleDAO.insert(v);
        } else {
            // UPDATE
            int id = Integer.parseInt(idStr);
            Vehicle v = new Vehicle(id, vin, any, color, idModel);
            System.out.println("[VehicleServlet] UPDATE -> " + v);
            vehicleDAO.update(v);
        }

        // redirecció segura amb contextPath
        response.sendRedirect(request.getContextPath() + "/vehicles");
    }
}
