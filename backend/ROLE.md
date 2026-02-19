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
