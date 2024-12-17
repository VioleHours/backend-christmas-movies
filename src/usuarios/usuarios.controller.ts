import { Controller, Post, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    @Post()
    async create(@Body() usuarioData: Partial<Usuario>) {
        return this.usuariosService.create(usuarioData);
    }
}
