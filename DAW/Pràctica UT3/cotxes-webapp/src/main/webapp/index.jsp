<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
    String contextPath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>El meu concessionari</title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet">

    <style>
        html, body {
            height: 100%;
            margin: 0;
        }

        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .hero {
            min-height: 100vh;
            width: 100%;
            /* Imatge de fons atractiva (pots canviar la URL per una altra) */
            background-image:
                linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.7)),
                url("https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #fff;
        }

        .hero-card {
            background: rgba(0, 0, 0, 0.45);
            padding: 2.5rem 2rem;
            border-radius: 1rem;
            backdrop-filter: blur(4px);
            box-shadow: 0 1.2rem 2.4rem rgba(0,0,0,0.45);
            max-width: 520px;
            width: 100%;
        }

        .hero-title {
            font-size: 2.2rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

        .hero-subtitle {
            font-size: 1.05rem;
            margin-top: 0.75rem;
            margin-bottom: 1.5rem;
            color: #e9ecef;
        }

        .hero-tagline {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.18em;
            color: #ced4da;
            margin-bottom: 0.5rem;
        }

        .btn-hero {
            font-size: 1.05rem;
            padding: 0.7rem 2.4rem;
            border-radius: 999px;
            font-weight: 600;
        }

        .badge-pill {
            border-radius: 999px;
            padding: 0.4rem 0.9rem;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
        }

        .hero-footer {
            font-size: 0.8rem;
            margin-top: 1.5rem;
            color: #ced4da;
        }

        @media (max-width: 576px) {
            .hero-card {
                padding: 1.75rem 1.25rem;
            }
            .hero-title {
                font-size: 1.7rem;
            }
        }
    </style>
</head>
<body>
<div class="hero">
    <div class="hero-card">
        <div class="hero-tagline text-uppercase">
            El meu concessionari
        </div>

        <h1 class="hero-title mb-2">
            Troba el teu proper cotxe
        </h1>

        <p class="hero-subtitle">
            Gestiona fàcilment el catàleg de vehicles del teu concessionari:
            afegeix, actualitza i elimina cotxes en pocs clics.
        </p>

        <span class="badge bg-light text-dark badge-pill mb-3">
            Gestor intern de vehicles
        </span>

        <div class="d-flex justify-content-center mb-1">
            <a href="<%= contextPath %>/vehicles" class="btn btn-primary btn-hero">
                Entrar a la gestió de vehicles
            </a>
        </div>

        <div class="hero-footer">
            Accés restringit al personal del concessionari · Backoffice web amb Java, JSP i Bootstrap
        </div>
    </div>
</div>

</body>
</html>
