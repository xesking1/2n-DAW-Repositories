package com.example.cotxes.model;

public class Vehicle {
    private int id;
    private String vin;
    private int anyFabricacio;
    private String color;
    private int idModel;

    // Camps derivats per mostrar a la vista
    private String marca;   // nom de la marca (Toyota, Seat, BMW...)
    private String model;   // nom del model (Corolla, León...)

    public Vehicle() {
    }

    // Constructor per a INSERT (sense id)
    public Vehicle(String vin, int anyFabricacio, String color, int idModel) {
        this.vin = vin;
        this.anyFabricacio = anyFabricacio;
        this.color = color;
        this.idModel = idModel;
    }

    // Constructor per a UPDATE (amb id)
    public Vehicle(int id, String vin, int anyFabricacio, String color, int idModel) {
        this(vin, anyFabricacio, color, idModel);
        this.id = id;
    }

    // Getters i setters bàsics
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getVin() { return vin; }
    public void setVin(String vin) { this.vin = vin; }

    public int getAnyFabricacio() { return anyFabricacio; }
    public void setAnyFabricacio(int anyFabricacio) { this.anyFabricacio = anyFabricacio; }

    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }

    public int getIdModel() { return idModel; }
    public void setIdModel(int idModel) { this.idModel = idModel; }

    // Nous getters/setters per a marca i model
    public String getMarca() { return marca; }
    public void setMarca(String marca) { this.marca = marca; }

    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }

    @Override
    public String toString() {
        return "Vehicle{" +
                "id=" + id +
                ", vin='" + vin + '\'' +
                ", anyFabricacio=" + anyFabricacio +
                ", color='" + color + '\'' +
                ", idModel=" + idModel +
                ", marca='" + marca + '\'' +
                ", model='" + model + '\'' +
                '}';
    }
}
