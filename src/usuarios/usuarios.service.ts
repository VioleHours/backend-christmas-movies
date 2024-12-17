import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  // Crear un nuevo usuario
  async create(usuarioData: Partial<Usuario>): Promise<Usuario> {
    const usuario = this.usuariosRepository.create(usuarioData);
    return await this.usuariosRepository.save(usuario);
  }

  // Obtener todos los usuarios
  async findAll(): Promise<Usuario[]> {
    return await this.usuariosRepository.find();
  }
}
