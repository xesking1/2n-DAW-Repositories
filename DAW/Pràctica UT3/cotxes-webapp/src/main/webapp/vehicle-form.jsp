<%@ page import="com.example.cotxes.model.Vehicle" %>
<%@ page import="com.example.cotxes.model.Model" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
    Vehicle v = (Vehicle) request.getAttribute("vehicle");
    boolean edit = (v != null);
    String contextPath = request.getContextPath();

    // Llista de models passada des del servlet: request.setAttribute("models", llistaModels);
    List<Model> models = (List<Model>) request.getAttribute("models");
%>
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title><%= edit ? "Editar vehicle" : "Nou vehicle" %></title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet">

    <style>
        body {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        }
        .card-form {
            border-radius: 1rem;
            box-shadow: 0 0.75rem 1.5rem rgba(0,0,0,0.08);
        }
        .form-label span {
            color: #dc3545;
        }
    </style>
</head>
<body>
<div class="container py-4">
    <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="mb-3 d-flex justify-content-between align-items-center">
                <h1 class="h4 mb-0">
                    <%= edit ? "Editar vehicle" : "Nou vehicle" %>
                </h1>
                <a href="<%= contextPath %>/vehicles" class="btn btn-outline-secondary btn-sm">
                    Tornar al llistat
                </a>
            </div>

            <form action="<%= contextPath %>/vehicles" method="post" class="card card-form p-4 bg-white">
                <% if (edit) { %>
                    <input type="hidden" name="id" value="<%= v.getId() %>">
                <% } %>

                <div class="mb-3">
                    <label for="vin" class="form-label">VIN <span>*</span></label>
                    <input
                        type="text"
                        id="vin"
                        name="vin"
                        class="form-control"
                        maxlength="20"
                        placeholder="Ex: VINTOYCOR123456789"
                        value="<%= edit ? v.getVin() : "" %>"
                        required>
                    <div class="form-text">Identificador únic del vehicle (VIN).</div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="anyFabricacio" class="form-label">Any de fabricació <span>*</span></label>
                        <input
                            type="number"
                            id="anyFabricacio"
                            name="anyFabricacio"
                            class="form-control"
                            min="1980"
                            max="2100"
                            placeholder="2023"
                            value="<%= edit ? v.getAnyFabricacio() : "" %>"
                            required>
                    </div>

                    <div class="col-md-6 mb-3">
                        <label for="color" class="form-label">Color</label>
                        <input
                            type="text"
                            id="color"
                            name="color"
                            class="form-control"
                            placeholder="Blanc, Negre, Vermell..."
                            value="<%= edit ? v.getColor() : "" %>">
                    </div>
                </div>

                <div class="mb-3">
                    <label for="idModel" class="form-label">Model <span>*</span></label>
                    <select
                        id="idModel"
                        name="idModel"
                        class="form-select"
                        required>
                        <option value="">-- Tria marca i model --</option>
                        <%
                            if (models != null) {
                                for (Model m : models) {
                                    // suposant que Model té getId(), getNom() i getNomMarca() o similar
                                    boolean selected = edit && v.getIdModel() == m.getId();
                        %>
                            <option value="<%= m.getId() %>" <%= selected ? "selected" : "" %>>
                                <%= /* Marca + model, adapta si el teu Model té altres mètodes */ m.getNomMarca() + " - " + m.getNom() %>
                            </option>
                        <%
                                }
                            }
                        %>
                    </select>
                    <div class="form-text">
                        Selecciona el model (marca + model) registrat a la base de dades.
                    </div>
                </div>

                <div class="d-flex justify-content-end gap-2 mt-3">
                    <a href="<%= contextPath %>/vehicles" class="btn btn-outline-secondary">
                        Cancel·lar
                    </a>
                    <button type="submit" class="btn btn-primary">
                        <%= edit ? "Desar canvis" : "Crear vehicle" %>
                    </button>
                </div>
            </form>

            <p class="text-muted small text-center mt-3 mb-0">
                Els camps marcats amb <span class="text-danger">*</span> són obligatoris.
            </p>
        </div>
    </div>
</div>
</body>
</html>
