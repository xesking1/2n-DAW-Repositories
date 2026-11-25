package com.example.cotxes.dao;

import com.example.cotxes.model.Vehicle;
import com.example.cotxes.util.DBUtil;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class VehicleDAO {

    public List<Vehicle> findAll() {
        List<Vehicle> list = new ArrayList<>();
        String sql = """
                SELECT v.id,
                    v.vin,
                    v.any_fabricacio,
                    v.color,
                    v.id_model,
                    m.nom  AS nom_model,
                    ma.nom AS nom_marca
                FROM vehicles v
                JOIN models m   ON v.id_model = m.id
                JOIN marques ma ON m.id_marca = ma.id
                ORDER BY ma.nom, m.nom, v.id
                """;

        try (Connection conn = DBUtil.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Vehicle v = new Vehicle();
                v.setId(rs.getInt("id"));
                v.setVin(rs.getString("vin"));
                v.setAnyFabricacio(rs.getInt("any_fabricacio"));
                v.setColor(rs.getString("color"));
                v.setIdModel(rs.getInt("id_model"));

                // Omplim marca i model per a la vista
                v.setMarca(rs.getString("nom_marca"));
                v.setModel(rs.getString("nom_model"));

                list.add(v);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }


    public Vehicle findById(int id) {
        String sql = """
                SELECT v.id,
                    v.vin,
                    v.any_fabricacio,
                    v.color,
                    v.id_model,
                    m.nom  AS nom_model,
                    ma.nom AS nom_marca
                FROM vehicles v
                JOIN models m   ON v.id_model = m.id
                JOIN marques ma ON m.id_marca = ma.id
                WHERE v.id = ?
                """;
        Vehicle v = null;

        try (Connection conn = DBUtil.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    v = new Vehicle();
                    v.setId(rs.getInt("id"));
                    v.setVin(rs.getString("vin"));
                    v.setAnyFabricacio(rs.getInt("any_fabricacio"));
                    v.setColor(rs.getString("color"));
                    v.setIdModel(rs.getInt("id_model"));
                    v.setMarca(rs.getString("nom_marca"));
                    v.setModel(rs.getString("nom_model"));
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return v;
    }


        public int insert(Vehicle v) {
        String sql = "INSERT INTO vehicles (vin, any_fabricacio, color, id_model) VALUES (?, ?, ?, ?)";
        int rows = 0;

        try (Connection conn = DBUtil.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, v.getVin());
            ps.setInt(2, v.getAnyFabricacio());
            ps.setString(3, v.getColor());
            ps.setInt(4, v.getIdModel());

            rows = ps.executeUpdate();
            System.out.println("[VehicleDAO] INSERT vehicles, files afectades = " + rows);
        } catch (SQLException e) {
            System.err.println("[VehicleDAO] Error a INSERT vehicles: " + e.getMessage());
            e.printStackTrace();
        }
        return rows;
    }

    public int update(Vehicle v) {
        String sql = "UPDATE vehicles SET vin = ?, any_fabricacio = ?, color = ?, id_model = ? WHERE id = ?";
        int rows = 0;

        try (Connection conn = DBUtil.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, v.getVin());
            ps.setInt(2, v.getAnyFabricacio());
            ps.setString(3, v.getColor());
            ps.setInt(4, v.getIdModel());
            ps.setInt(5, v.getId());

            rows = ps.executeUpdate();
            System.out.println("[VehicleDAO] UPDATE vehicles, files afectades = " + rows);
        } catch (SQLException e) {
            System.err.println("[VehicleDAO] Error a UPDATE vehicles: " + e.getMessage());
            e.printStackTrace();
        }
        return rows;
    }

    public int delete(int id) {
        int rows = 0;

        String sqlDeleteRelacions = "DELETE FROM vehicle_caracteristica WHERE id_vehicle = ?";
        String sqlDeleteVehicle   = "DELETE FROM vehicles WHERE id = ?";

        try (Connection conn = DBUtil.getConnection()) {
            conn.setAutoCommit(false);

            try (PreparedStatement psRel = conn.prepareStatement(sqlDeleteRelacions);
                PreparedStatement psVeh = conn.prepareStatement(sqlDeleteVehicle)) {

                psRel.setInt(1, id);
                int relRows = psRel.executeUpdate();
                System.out.println("[VehicleDAO] DELETE vehicle_caracteristica, files afectades = " + relRows);

                psVeh.setInt(1, id);
                rows = psVeh.executeUpdate();
                System.out.println("[VehicleDAO] DELETE vehicles, files afectades = " + rows);

                conn.commit();
            } catch (SQLException e) {
                conn.rollback();
                System.err.println("[VehicleDAO] Error a DELETE (rollback): " + e.getMessage());
                throw e;
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return rows;
    }


}
