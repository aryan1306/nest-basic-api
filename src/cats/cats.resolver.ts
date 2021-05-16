import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/cats.dto';
import { CreateCatsInput } from './dto/cats.input';

@Resolver()
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => String)
  async hello() {
    return 'Hello World!';
  }

  @Query(() => [CreateCatDto])
  async allCats() {
    return this.catsService.findAll();
  }

  @Mutation(() => CreateCatDto)
  async createCat(@Args('input') input: CreateCatsInput) {
    return this.catsService.create(input);
  }
}
