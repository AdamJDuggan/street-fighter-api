import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true, // Remove unknown properties
			forbidNonWhitelisted: true, //Throw error for unknown properties
			validateCustomDecorators: true,
			transform: true, // Automatically transforms strings to enum values
		}),
	);

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
