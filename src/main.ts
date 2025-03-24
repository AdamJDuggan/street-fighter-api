import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { join } from "path";
import * as hbs from "express-handlebars";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	// app.useStaticAssets(join(__dirname, "..", "public"));

	app.setBaseViewsDir(join(__dirname, "..", "views"));

	app.engine("hbs", hbs({ extname: "hbs" }));

	app.setViewEngine("hbs");

	/**
	 * Generate OpenAPI documentation for endpoints
	 */
	const config = new DocumentBuilder()
		.setTitle("Street Fighter API")
		.setDescription("Endpoints")
		.setVersion("1.0")
		.build();
	const documentFactory = () => SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("api", app, documentFactory);

	/**
	 * Ensure req params match DTOs
	 */
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
