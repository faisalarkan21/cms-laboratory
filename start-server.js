
// Buat Akses ke Shell pakai child_process

const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'server', shell: true };
require('child_process').spawn('npm', args, opts);
