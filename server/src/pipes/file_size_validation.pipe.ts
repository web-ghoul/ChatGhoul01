import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class FileSizeValidation implements PipeTransform {
  transform(value: any) {
    const max_size = 10000000;
    if (value && value.size > max_size) {
      throw new HttpException(
        'The File Size is Larger Than 10MB',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    return value;
  }
}