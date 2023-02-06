import { Controller, Post, Param, Query, Body, Get, Put, Delete } from '@nestjs/common';
import { ITareaDTO } from './DTO/tarea.dto';
import { TareasService } from './tareas.service';
import { v4 as uuid } from 'uuid';
import { PARAMTYPES_METADATA } from '@nestjs/common/constants';

@Controller('api/v1/tareas')
export class TareasController {
   constructor(private readonly NombreTareasServicio:TareasService){}
  @Post()
  Insertar(@Body() nombre:ITareaDTO){
    return this.NombreTareasServicio.Insertar(nombre)
  }

  @Get()
  Todos(){
    return this.NombreTareasServicio.Todos()
  }

 @Get(':id')
  Uno(@Param('id') id:string){
    return this.NombreTareasServicio.Uno(id)
  }

  @Put(':id')
    Actualizar(@Param('id') id:string, @Body() cuerpo:ITareaDTO) {
      return this.NombreTareasServicio.Actualizar(id,cuerpo)
  }
  @Delete(':id')
  Eliminar(@Param('id') id:string){
    return this.NombreTareasServicio.Eliminar(id)
  }
  }
   

