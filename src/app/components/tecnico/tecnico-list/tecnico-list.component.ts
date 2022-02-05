import { TecnicoService } from "./../../../services/tecnico.service";
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
  DATA: Tecnico[] = [];

  displayedColumns: string[] = [
    "id",
    "nome",
    "cpf",
    "email",
    "acoes",
  ];
  dataSource = new MatTableDataSource<Tecnico>(this.DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: TecnicoService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.DATA = resposta;
      this.dataSource = new MatTableDataSource<Tecnico>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
