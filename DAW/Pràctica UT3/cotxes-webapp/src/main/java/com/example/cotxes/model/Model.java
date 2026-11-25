package com.example.cotxes.model;

public class Model {
    private int id;
    private String nom;
    private Integer anyLlancament;
    private int idMarca;
    private String nomMarca; // camp “derivat” per mostrar marca + model al formulari

    public Model() {
    }

    public Model(int id, String nom, Integer anyLlancament, int idMarca, String nomMarca) {
        this.id = id;
        this.nom = nom;
        this.anyLlancament = anyLlancament;
        this.idMarca = idMarca;
        this.nomMarca = nomMarca;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }

    public Integer getAnyLlancament() { return anyLlancament; }
    public void setAnyLlancament(Integer anyLlancament) { this.anyLlancament = anyLlancament; }

    public int getIdMarca() { return idMarca; }
    public void setIdMarca(int idMarca) { this.idMarca = idMarca; }

    public String getNomMarca() { return nomMarca; }
    public void setNomMarca(String nomMarca) { this.nomMarca = nomMarca; }

    @Override
    public String toString() {
        return nomMarca + " - " + nom;
    }
}
