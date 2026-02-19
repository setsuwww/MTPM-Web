package models

type Client struct {
    ID        uint      `gorm:"primaryKey"`
    Name      string
    Email     string
    Company   string
    CreatedAt time.Time
    UpdatedAt time.Time
}
