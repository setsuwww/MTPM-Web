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

	db := database.Connect() // kembalikan *gorm.DB

	r := router.SetupRouter(db)

	log.Println("Application started successfully")
	if err := r.Run(":8080"); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
