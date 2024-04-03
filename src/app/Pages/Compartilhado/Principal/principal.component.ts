
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  deslogar(){
    this._authService.deslogar();
  }

}
