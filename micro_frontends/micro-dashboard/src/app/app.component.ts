import { Component } from '@angular/core';
import { Product } from 'src/services/product.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  products: Product[];

  constructor(
    private service: ProductService) {
  }
  ngOnInit(){
    this.getProducts()
  }
  getProducts(){
    this.service.getProducts()
    .subscribe(
      result => {

        
        //if(result.meta.codigo == 200){
        if (result) {
          this.products = result;
          if (this.products.length == 0)
            alert('nenhum produto foi encontrado')
          //this.loadingController.dismiss(null, undefined);
        } else {
          alert('nenhum produto foi encontrado')
          //this.presentAlert("Você não tem permissão para acessar o eventos.", "Alerta")
        }

        //this.loadingController.dismiss(null, undefined);
      },
      error => {
        console.log('erro')
        //this.loadingController.dismiss(null, undefined);
        //this.presentAlert("Ocorreu algum erro.", "Alerta")
      });
  }
}
