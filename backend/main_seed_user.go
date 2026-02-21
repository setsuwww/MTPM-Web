package main

import (
	"log"

	"backend/internal/database"
	"backend/internal/models"

	"github.com/joho/godotenv"
	"golang.org/x/crypto/bcrypt"
)

func users_seed() {
	if err := godotenv.Load(); err != nil {
		log.Println(".env not found, using system env")
	}

	// Connect database
	database.Connect()

	// Users to seed
	users := []models.User{
		{Name: "Super Admin", Email: "superadmin@example.com", Role: models.SUPER_ADMIN, Password: "password123"},
		{Name: "Admin", Email: "admin@example.com", Role: models.ADMIN, Password: "password123"},
		{Name: "Project Manager", Email: "pm@example.com", Role: models.PROJECT_MANAGER, Password: "password123"},
		{Name: "Developer", Email: "developer@example.com", Role: models.DEVELOPER, Password: "password123"},
		{Name: "Client", Email: "client@example.com", Role: models.CLIENT, Password: "password123"},
	}

	for _, u := range users {
		// Hash password
		hashed, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
		if err != nil {
			log.Fatal("Failed hashing password:", err)
		}
		u.Password = string(hashed)

		// Insert to DB
		if err := database.DB.Create(&u).Error; err != nil {
			log.Println("Failed creating user:", u.Email, err)
		} else {
			log.Println("Created user:", u.Email)
		}
	}

	log.Println("Seeding users done!")
}
