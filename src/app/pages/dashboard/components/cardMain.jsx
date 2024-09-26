'use client';
import { useState } from 'react';
import { Filter } from "@/app/components/Cards/filter";
import Card from "./card";

  const Cards = ({habitaciones}) => {
    
  const habitacionesFetch = habitaciones;
  const [filteredRooms, setFilteredRooms] = useState(habitacionesFetch); // Estado de habitaciones filtradas
  const [filters, setFilters] = useState({ nombre: "all", piso: "all", estado_disponibilidad: "all"}); // Estado de los filtros

  return (
    <>
    <div className="filters-wrapper">
      <Filter
        rooms={habitaciones}
        setFilteredRooms={setFilteredRooms}
        filters={filters}
        setFilters={setFilters}
        filterProperty="nombre"
        general="CATEGORIAS"
      />
      <Filter
        rooms={habitaciones}
        setFilteredRooms={setFilteredRooms}
        filters={filters}
        setFilters={setFilters}
        filterProperty="piso"
        general="PISOS"
      />
      <Filter
        rooms={habitaciones}
        setFilteredRooms={setFilteredRooms}
        filters={filters}
        setFilters={setFilters}
        filterProperty="estado_disponibilidad"
        general="ESTADOS"
      />
      </div>
      {filteredRooms.map((room) => (
        <Card key={room.id} habitacion={room} />
      ))}
    </>
  );
};

export default Cards;
