package main

import (
	"log"

	"github.com/joho/godotenv"

	"backend/internal/database"
	"backend/internal/router"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println(".env not found, using system environment")
	}

	database.Connect()

	log.Println("Application started successfully")

	r := router.SetupRouter()

	if err := r.Run(":8080"); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
