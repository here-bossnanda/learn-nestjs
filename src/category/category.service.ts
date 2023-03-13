import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  private readonly category: CreateCategoryDto[] = [];

  create(createCategoryDto: CreateCategoryDto) {
    createCategoryDto.id = this.category.length + 1
    this.category.push(createCategoryDto)
    return `This action adds a new category ${createCategoryDto.name}`;
  }

  findAll() {
    return this.category;
  }

  findOne(id: number) {
    let result = {}

    this.category.forEach(element => {
      if (element.id === id) {
        result = element
      }
    });


    return result;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
