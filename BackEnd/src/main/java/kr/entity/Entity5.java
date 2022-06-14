package kr.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "entity5")
public class Entity5 {
    @Id
    @GeneratedValue
    int id;
    String name7;
    int weight;

    public Entity5(int id, String name7, int weight) {
        this.id = id;
        this.name7 = name7;
        this.weight = weight;
    }

    public Entity5(){}

    public int getId() {
        return id;
    }

    public String getName7() {
        return name7;
    }

    public int getWeight() {
        return weight;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName7(String name7) {
        this.name7 = name7;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    @Override
    public String toString() {
        return "Entity5{" +
                "id=" + id +
                ", name7='" + name7 + '\'' +
                ", weight=" + weight +
                '}';
    }
}
