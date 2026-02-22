package database

import (
	"log"
	"os"

	"backend/resource/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() *gorm.DB {
	dsn := os.Getenv("DATABASE_URL")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect:", err)
	}

	DB = db
	log.Println("Database connected")
	return db
}

func RunMigrations(db *gorm.DB) {
	db.Migrator().DropTable(
		&models.Task{},
		&models.Project{},
		&models.OrganizationMember{},
		&models.Organization{},
		&models.Invitation{},
	)

	db.Exec("SET search_path TO mtpmsaas_new;")
	if err := db.AutoMigrate(
		&models.User{},
		&models.Organization{},
		&models.OrganizationMember{},
		&models.Project{},
		&models.Task{},
		&models.Invitation{},
	); err != nil {
		log.Fatal("Migration failed:", err)
	}
	log.Println("Database migration completed")
}
