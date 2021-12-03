import { Component, OnInit} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "../servicios/api/api.service";
import { LoginI } from "../modelos/login.interface";
import { Router } from "@angular/router";
import { ResponseI } from "../modelos/response.interface";



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit{
  
  loginForm = new FormGroup({
    correo : new FormControl('', Validators.required),
    PassArt : new FormControl('', Validators.required)
  })

  constructor(private api: ApiService, private router:Router) {}
  
  errorStatus:boolean = false;
  errorMsj:any ="";


  ngOnInit(): void{
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['principal'])
    }
  }

  onLogin(form: LoginI){
    this.api.loginByEmail(form).subscribe(data=>{
      let dataResponse:ResponseI = data;
      /*console.log(data);*/
      if(dataResponse.status == "ok"){
        localStorage.setItem("token",dataResponse.result.token);
        this.router.navigate(["principal"]);
      }
      else{
        this.errorStatus=true;
        this.errorMsj="Contraseña y/o email son incorrectos";
      }
  })

}
}
