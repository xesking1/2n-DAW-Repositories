package com.example.cotxes.dao;

import com.example.cotxes.model.Model;
import com.example.cotxes.util.DBUtil;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ModelDAO {

    public List<Model> findAll() {
        List<Model> list = new ArrayList<>();

        String sql = """
                SELECT m.id, m.nom, m.any_llancament, m.id_marca, ma.nom AS nom_marca
                FROM models m
                JOIN marques ma ON m.id_marca = ma.id
                ORDER BY ma.nom, m.nom
                """;

        try (Connection conn = DBUtil.getConnection();
            PreparedStatement ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Model m = new Model();
                m.setId(rs.getInt("id"));
                m.setNom(rs.getString("nom"));
                m.setAnyLlancament((Integer) rs.getObject("any_llancament"));
                m.setIdMarca(rs.getInt("id_marca"));
                m.setNomMarca(rs.getString("nom_marca"));
                list.add(m);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }
}
