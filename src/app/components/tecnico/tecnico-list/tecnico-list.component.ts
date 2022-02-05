import { Tecnico } from "./../../../models/tecnico";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-tecnico-list",
  templateUrl: "./tecnico-list.component.html",
  styleUrls: ["./tecnico-list.component.scss"],
})
export class TecnicoListComponent implements OnInit {
  DATA: Tecnico[] = [
    {
      id: 1,
      nome: "Daylton",
      cpf: "11111111111",
      email: "daylton@email.com",
      senha: "123",
      perfis: ["0"],
      dataCriacao: "10/02/2022",
    },
  ];

  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "symbol",
    "acoes",
  ];
  dataSource = new MatTableDataSource<Tecnico>(this.DATA);

  constructor() {}

  ngOnInit(): void {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
