<%@ page import="java.util.List" %>
<%@ page import="com.example.cotxes.model.Vehicle" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
    List<Vehicle> vehicles = (List<Vehicle>) request.getAttribute("vehicles");
    String contextPath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Llistat de vehicles</title>
    <!-- Bootstrap CSS (CDN) -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet">
</head>
<body class="bg-light">

<div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="h3">El meu concessionari</h1>
        <a href="<%= contextPath %>/vehicles?action=new" class="btn btn-primary">Afegir vehicle</a>
    </div>

    <!-- Cercador -->
    <div class="mb-3">
        <input type="text" id="searchInput" class="form-control"
                placeholder="Cerca per marca, model, color, any...">
    </div>

    <!-- Graella de vehicles -->
    <div class="row" id="vehicleGrid">
        <%
            if (vehicles != null) {
                for (Vehicle v : vehicles) {
        %>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 vehicle-card">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <!-- Marca + model -->
                    <h5 class="card-title">
                        <%= v.getMarca() %> <span class="text-muted">·</span> <%= v.getModel() %>
                    </h5>
                    <p class="card-text mb-1">
                        <strong>Any:</strong> <%= v.getAnyFabricacio() %>
                    </p>
                    <p class="card-text mb-1">
                        <strong>Color:</strong> <%= v.getColor() != null ? v.getColor() : "-" %>
                    </p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <a href="<%= contextPath %>/vehicles?action=edit&id=<%= v.getId() %>"
                        class="btn btn-sm btn-warning">Editar</a>
                    <a href="<%= contextPath %>/vehicles?action=delete&id=<%= v.getId() %>"
                        class="btn btn-sm btn-danger"
                        onclick="return confirm('Vols esborrar aquest vehicle?');">Eliminar</a>
                </div>
            </div>
        </div>
        <%
                }
            }
        %>
    </div>
</div>

<!-- Bootstrap JS (opcional) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- Cercador JavaScript -->
<script>
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.vehicle-card');

    searchInput.addEventListener('keyup', function () {
        const filter = this.value.toLowerCase();

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(filter) ? '' : 'none';
        });
    });
</script>

</body>
</html>
