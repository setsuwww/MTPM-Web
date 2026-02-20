Delivery Intelligence SaaS untuk software house bukan cuma:
Terima order → assign dev → kasih deadline
Melainkan sistem untuk mengontrol:
Scope
Resource
Biaya
Profit margin
Risiko keterlambatan

🔷 Gambaran Alur Nyata (Use Case CMS Project)

Misal: Client datang minta CMS custom.

1️⃣ Pre-Sales / Deal Stage

Client Request
    ↓
Admin input Lead
    ↓
Scope & Estimasi dibuat
    ↓
Budget disetujui
    ↓
Project dibuat


Data yang dicatat:
Estimasi jam kerja
Rate developer
Target deadline
Total budget kontrak

2️⃣ Project Setup

Project Created
    ↓
Milestone dibuat
    ↓
Sprint dibuat
    ↓
Task breakdown


Contoh milestone:

UI selesai
API selesai
Testing
Deployment

3️⃣ Assignment & Tracking

PM assign Developer
        ↓
Developer log time
        ↓
Status task berubah
        ↓
Sprint ditutup

Di sini sistem mulai bekerja secara intelligence.

🔷 Di Mana “Intelligence”-nya?

Bukan cuma progress bar.
Sistem menghitung:

🔹 Estimasi vs Realisasi

CMS diestimasi 120 jam
Ternyata 160 jam
Sistem deteksi overbudget 33%

🔹 Burn Rate

Budget Proyek = 30 juta
Cost Developer = 20 juta (berdasarkan jam)

Sistem bisa hitung:
Sisa margin
Prediksi profit akhir

🔷 Jadi Perannya Apa?

Bukan hanya:

Admin assign developer.
Tapi lebih ke:
CEO software house tahu:
Proyek mana yang untung
Proyek mana yang hampir rugi
Developer mana bottleneck
Estimasi mana yang sering meleset

🔷 Siapa User-nya?

Dalam satu perusahaan IT:

Super Admin ( Seluruh platform ) {
    - CRUD semua perusahaan, user, project, task
    - Assign admin / developer
    - Lihat semua laporan / analytics
    - Manage subscription / billing
}

Company Admin ( Perusahaan tertentu ) {
    - CRUD user & developer dalam perusahaannya
    - CRUD project dan task
    - Assign task ke developer
    - Lihat laporan / analytics perusahaan
}

Project Manager (PM, ( Project tertentu )) {
    - CRUD task & milestones
    - Assign task ke developer
    - Update status task
    - Lihat progress project
}

Developer ( Task tertentu ) {
    - Update task progress
    - Submit hasil task
    - Tambah komentar / notes
    - Lihat project / task terkait
}

Client / Viewer ( Project tertentu ) {
    - Lihat progress project / task
    - Submit request / feedback
    - Tidak bisa edit task / project
}
