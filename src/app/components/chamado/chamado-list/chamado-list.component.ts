import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Chamado } from './../../../models/chamado';

@Component({
  selector: "app-chamado-list",
  templateUrl: "./chamado-list.component.html",
  styleUrls: ["./chamado-list.component.scss"],
})
export class ChamadoListComponent implements OnInit {
  DATA: Chamado[] = [
    {
      id: 1,
      dataAbertura: "05/02/2022",
      dataFechamento: "08/02/2022",
      prioridade: "ALTA",
      status: "ANDAMENTO",
      titulo: "Instalação Impressora",
      descricao: "Teste Chamado",
      tecnico: 1,
      cliente: 1,
      nomeCliente: "Jorge",
      nomeTecnico: "Daylton",
    },
    {
      id: 2,
      dataAbertura: "05/02/2022",
      dataFechamento: "08/02/2022",
      prioridade: "MEDIA",
      status: "CONCLUIDO",
      titulo: "Instalação Impressora",
      descricao: "Teste Chamado",
      tecnico: 1,
      cliente: 1,
      nomeCliente: "Jorge",
      nomeTecnico: "Pedro",
    },
  ];

  displayedColumns: string[] = [
    "id",
    "titulo",
    "cliente",
    "tecnico",
    "dataAbertura",
    "prioridade",
    "status",
    "acoes",
  ];
  dataSource = new MatTableDataSource<Chamado>(this.DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
