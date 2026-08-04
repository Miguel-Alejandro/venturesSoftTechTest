import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Title } from "../../components/title/title";
import { BenefitsTable } from "../../components/benefits-table/benefits-table";
import { Category } from "../../components/category/category/category";

@Component({
  selector: 'app-home',
  imports: [Header, Title, BenefitsTable, Category],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected homeTitle: string = "Link your business card to unlock cashback offers";
}
