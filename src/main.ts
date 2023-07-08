import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";

async function start() {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);

        const config = new DocumentBuilder()
            .setTitle('Test project for Junior FullStack')
            .setDescription('Documentation')
            .setVersion('1.0.0')
            .build()
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('/api/docs', app, document)

        app.useGlobalPipes(new ValidationPipe())
        app.enableCors({
            credentials: true,
            origin: process.env.LOCAL_HOST || 'http://localhost:3000',
            methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
        })
        await app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
