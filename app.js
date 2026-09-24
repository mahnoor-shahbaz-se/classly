const $ = s => document.querySelector(s), root = $('#root');
const ls = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch {} };
const S = { user: ls('user', { name: 'Mahnoor Shahbaz', email: 'mahnoor@example.com', role: 'Student' }), todos: ls('todos', [{ t: 'Finish landing page hero section', d: 0 }, { t: 'Read HTML & CSS Reference Guide', d: 1 }, { t: 'Draft SQL schema', d: 0 }]), done: ls('done', {}), posts: [], prefs: ls('prefs', { email: 1, deadline: 1, dark: 0 }) };
const C = [
  { id: 'uiux', n: 'UI/UX Development', t: 'Abdul Rehman Hashmi', p: 70, code: 'CS-301', g: 88 },
  { id: 'web', n: 'Web Development', t: 'Dr. Ahmed Khan', p: 45, code: 'CS-302', g: 79 },
  { id: 'db', n: 'Database Systems', t: 'Prof. Sara Malik', p: 85, code: 'CS-303', g: 92 }];
const A = [
  { id: 1, c: 'web', n: 'Build a Responsive Landing Page', off: 1, pts: 100, d: 'Design and build a responsive landing page with HTML, CSS and a little JavaScript. It must work on mobile and desktop.' },
  { id: 2, c: 'db', n: 'SQL Database Design', off: 3, pts: 50, d: 'Design a normalized schema for a library system and write the CREATE TABLE statements.' },
  { id: 3, c: 'uiux', n: 'Responsive Web Design — Assignment 01', off: 5, pts: 100, d: 'Build a responsive landing page using HTML and CSS. Submit your project before the deadline.' },
  { id: 4, c: 'uiux', n: 'Wireframe Case Study', off: 9, pts: 60, d: 'Create low-fidelity wireframes for a mobile app and explain your design decisions.' },
  { id: 5, c: 'db', n: 'ER Diagram & Normalization', off: 12, pts: 40, d: 'Produce an ER diagram and normalize it to 3NF.' }];
const R = [['HTML & CSS Reference Guide', 'uiux', 'Lecture'], ['Flexbox & Grid Cheatsheet', 'web', 'Resource'], ['Intro to Normalization', 'db', 'Lecture'], ['Design Systems Handbook', 'uiux', 'Resource']];
const cls = id => C.find(c => c.id == id), day = n => { const d = new Date(); d.setDate(d.getDate() + n); return d };
const dueTxt = n => n <= 1 ? 'Due tomorrow' : `Due in ${n} days`;
const ini = n => n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
const logo = (h = 34) => `<a href="#/"><img class="logo" style="height:${h}px" src="logo.png" alt="Classly"></a>`;
const ic = { Dashboard: '▦', 'My Classes': '📖', Calendar: '📅', 'To-Do': '☑', Grades: '📊' };

const foot = `<div class="foot"><span>© 2026 Classly</span><span><a href="#/help">Help</a> · <a href="#/privacy">Privacy</a> · <a href="#/terms">Terms</a></span></div>`;
function shell(active, body) {
  const nav = [['Dashboard', '/dashboard'], ['My Classes', '/classes'], ['Assignments', '/assignments'], ['Calendar', '/calendar'], ['To-Do', '/todo'], ['Grades', '/grades']];
  return `<div class="app"><aside>${logo()}<nav>${nav.map(([n, h]) => `<a href="#${h}" class="${n == active ? 'on' : ''}">${n}</a>`).join('')}</nav>
  <a href="#/settings" class="${active == 'Settings' ? 'on' : ''}">⚙ Settings</a>
  <a class="user" href="#/profile"><div class="av">${ini(S.user.name)}</div><div><div style="font-size:14px;color:var(--t)">${S.user.name}</div><div class="m" style="font-size:12px">${S.user.role}</div></div></a></aside>
  <main class="fade">${body}${foot}</main></div>`;
}
const head = (t, s) => `<div class="top"><div><h1>${t}</h1><p class="m">${s || ''}</p></div><div class="row"><a href="#/announcements" class="btn o" style="padding:8px 12px" title="Notifications">🔔</a><a href="#/profile" class="av">${ini(S.user.name)}</a></div></div>`;
const prog = c => `<div class="card"><h3>${c.n}</h3><p class="m">${c.t}</p><p class="m" style="margin-top:14px">Progress</p><div class="bar"><i style="width:${c.p}%"></i></div><div class="row" style="justify-content:space-between"><small style="color:var(--p)">${c.p}%</small><a href="#/class/${c.id}" style="font-size:13px">View Class →</a></div></div>`;
const aCard = a => `<a href="#/assignment/${a.id}" class="card due" style="color:var(--t)"><div><div style="font-weight:500">${a.n}</div><div class="m">${cls(a.c).n}</div></div><span class="m ${a.off <= 1 ? 'warn' : ''}">${dueTxt(a.off)}</span></a>`;

const P = {};
P['/'] = () => `<div class="nav">${logo()}<div class="row"><a class="l" href="#features">Features</a><a class="l" href="#how">How it works</a><a class="l" href="#/about">About</a><a class="btn o" href="#/login">Log in</a><a class="btn" href="#/signup">Get Started</a></div></div>
<section class="hero"><div><h1>A Smarter Way to Learn, Together.</h1><p class="m" style="font-size:18px;margin-bottom:28px">Classly brings your classes, assignments, resources, and progress together in one simple learning space.</p><a class="btn" href="#/signup">Get Started</a> <a class="btn o" href="#how">Learn More</a></div>
<div class="shot"><b>Good morning, Mahnoor</b><p class="m" style="font-size:12px">Here's what's happening with your classes today.</p><div class="grid" style="grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px">${C.map(c => `<div class="card" style="padding:10px;font-size:11px"><b>${c.n}</b><div class="bar"><i style="width:${c.p}%"></i></div>${c.p}%</div>`).join('')}</div><div class="card" style="padding:10px;font-size:11px;margin-top:10px">Build a Responsive Landing Page <span class="warn" style="float:right">Due tomorrow</span></div></div></section>
<section class="sec w" id="features"><div class="grid g3">${[['📖', 'Everything in One Place', 'Classes, assignments, and learning resources organized in one space.'], ['📅', 'Stay on Track', 'See upcoming deadlines and keep your coursework organized.'], ['👥', 'Learn Together', 'Connect with teachers and classmates throughout your learning journey.']].map(f => `<div class="row" style="align-items:flex-start"><span style="font-size:30px">${f[0]}</span><div><b>${f[1]}</b><p class="m">${f[2]}</p></div></div>`).join('')}</div></section>
<section class="sec" id="how"><h1>How Classly Works</h1><p class="m">Everything you need to manage your learning, from joining a class to tracking your progress.</p><div class="steps">${[['Join', 'Join your classes and instantly access your learning space.'], ['Organize', 'Find assignments, resources, announcements, and deadlines in one place.'], ['Progress', 'Submit your work, receive feedback, and keep track of your progress.']].map((s, i) => `<div><div class="num">${i + 1}</div><h3>${s[0]}</h3><p class="m">${s[1]}</p></div>`).join('')}</div></section>
<section class="sec w"><h1>Everything You Need to Learn Better</h1><p class="m" style="margin-bottom:28px">Classly brings your classes, coursework, and progress together so you always know what to learn and what comes next.</p><div class="grid g3">${[['Organize Your Classes', 'Access every class, resource, and announcement from one organized dashboard.'], ['Stay Ahead of Deadlines', 'See upcoming assignments and deadlines without searching through every class.'], ['Track Your Progress', 'Review grades, feedback, and coursework progress in one clear view.']].map((f, i) => `<div class="card" style="min-height:160px"><h2 style="color:var(--p);margin:0">0${i + 1}</h2><h3 style="margin:8px 0">${f[0]}</h3><p class="m">${f[1]}</p></div>`).join('')}</div></section>
<section class="cta"><h1>Ready to take control of your academic life?</h1><p style="margin-top:10px">Bring your classes, assignments, and progress together with Classly.</p><a class="btn" href="#/signup">Get Started</a></section>
<footer class="pf"><div>${logo()}<p class="m" style="margin-top:12px">A simpler way to learn, manage, and grow.</p></div><div><h4>PRODUCT</h4><a href="#features">Features</a><a href="#how">How it works</a><a href="#/about">About</a></div><div><h4>PLATFORM</h4><a href="#/dashboard">Dashboard</a><a href="#/assignments">Classwork</a><a href="#/calendar">Calendar</a></div><div><h4>ACCOUNT</h4><a href="#/login">Log in</a><a href="#/signup">Sign Up</a><a href="#/settings">Settings</a></div><div style="width:100%;border-top:1px solid var(--b);padding-top:18px" class="foot"><span>© 2026 Classly. All rights reserved.</span><span><a href="#/privacy">Privacy</a> · <a href="#/terms">Terms</a></span></div></footer>`;
P['/about'] = () => `<div class="nav">${logo()}<a class="btn" href="#/signup">Get Started</a></div><div class="page"><h1>About Classly</h1><p>Classly is a simpler, calmer take on the online classroom. We believe students shouldn't have to hunt through every class to find what's due next.</p><p>Built by students, for students and teachers who want a focused space to learn, manage, and grow.</p></div>`;

const pw = (id, ph) => `<div style="position:relative"><input id="${id}" type="password" placeholder="${ph}"><span style="position:absolute;right:14px;top:11px;cursor:pointer" onclick="const i=this.previousSibling;i.type=i.type=='password'?'text':'password'">👁</span></div>`;
P['/signup'] = () => `<div class="auth"><div class="l"><span class="chip"><img class="logo" style="height:50px" src="logo.png"></span><h1>Start learning smarter with Classly.</h1><p style="margin-top:28px;opacity:.9">Create your account and bring your classes, assignments, and progress into one place.</p></div>
<div class="r fade"><h1>Create your Classly account</h1><p class="m">Set up your learning space in just a few steps.</p>
<label>Full Name</label><input id="fn" placeholder="Enter your full name"><div class="err" id="e1"></div>
<label>Email Address</label><input id="em" type="email" placeholder="you@example.com"><div class="err" id="e2"></div>
<label>Profile Avatar</label><div class="row"><label for="ph" class="av" style="width:64px;height:64px;margin:0;cursor:pointer;overflow:hidden" id="pv">📷</label><div><label for="ph" style="margin:0;color:var(--p);cursor:pointer">Upload a photo</label><span class="m" style="font-size:12px">Optional · JPG or PNG</span></div><input id="ph" type="file" accept="image/*" hidden onchange="const f=this.files[0];if(f){pv.innerHTML='<img style=width:100%;height:100% src='+URL.createObjectURL(f)+'>'}"></div>
<label>Password</label>${pw('pa', 'Create a password')}<div class="err" id="e3"></div>
<label>Confirm Password</label>${pw('pc', 'Re-enter your password')}<div class="err" id="e4"></div>
<label>I am a</label><div class="seg" id="role"><div class="on">Student</div><div>Teacher</div></div>
<button class="btn" style="width:100%;margin-top:28px" id="go">Create Account</button><p class="m" style="text-align:center;margin-top:18px">Already have an account? <a href="#/login">Log in</a></p></div></div>`;
P['/login'] = () => `<div class="auth"><div class="l"><span class="chip"><img class="logo" style="height:50px" src="logo.png"></span><h1>Welcome back to Classly.</h1><p style="margin-top:28px;opacity:.9">Pick up right where you left off.</p></div><div class="r fade"><h1>Log in</h1><p class="m">Enter your details to continue.</p><label>Email Address</label><input id="em" type="email" placeholder="you@example.com"><label>Password</label>${pw('pa', 'Your password')}<div class="err" id="e1"></div><button class="btn" style="width:100%;margin-top:28px" id="go">Log in</button><p class="m" style="text-align:center;margin-top:18px">New here? <a href="#/signup">Create an account</a></p></div></div>`;
P['/loading'] = () => `<div class="load"><img class="logo" style="height:44px" src="logo.png"><div class="bar"><i id="lb" style="width:5%"></i></div><p class="m">Preparing your classroom...</p></div>`;

P['/dashboard'] = () => shell('Dashboard', `${head('Good morning, ' + S.user.name.split(' ')[0], "Here's what's happening with your classes today.")}<h2>My Classes</h2><div class="grid g3">${C.map(prog).join('')}</div>
<div class="top"><h2>Due Soon</h2><a href="#/assignments">View all →</a></div><div class="grid g2">${A.slice(0, 2).map(aCard).join('')}</div>
<h2>Class Learning Tools</h2><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(170px,1fr))">${[['📋 Classwork', '/assignments'], ['📅 Calendar', '/calendar'], ['✅ To-Do', '/todo'], ['📊 Grades', '/grades']].map(t => `<a class="card tool" href="#${t[1]}">${t[0]}</a>`).join('')}</div><p class="m" style="margin-top:32px;padding-top:20px;border-top:1px solid var(--b)">You're all caught up.</p>`);
P['/classes'] = () => shell('My Classes', `${head('My Classes', 'All the classes you are enrolled in.')}<div class="grid g3" style="margin-top:24px">${C.map(prog).join('')}</div>
<div class="card" style="margin-top:24px"><h3>Join a class</h3><div class="row" style="margin-top:12px"><input id="code" placeholder="Enter class code"><button class="btn" onclick="alert(code.value?'Request sent for '+code.value:'Enter a code first')">Join</button></div></div>`);

const tab = (id, cur) => `<div class="tabs">${['stream', 'classwork', 'people'].map(t => `<a href="#/class/${id}/${t}" class="${t == cur ? 'on' : ''}">${t[0].toUpperCase() + t.slice(1)}</a>`).join('')}</div>`;
P['/class'] = (id, t = 'stream') => {
  const c = cls(id); if (!c) return P['404']();
  const as = A.filter(a => a.c == id), rs = R.filter(r => r[1] == id);
  let body = '';
  if (t == 'stream') body = `<div class="card row"><div class="av">${ini(S.user.name)}</div><input id="pt" placeholder="Share an announcement with your class.."><button class="btn" id="post">Post</button></div>
  ${S.posts.filter(p => p.c == id).map(p => `<div class="card" style="margin-top:20px"><b style="font-size:13px">ANNOUNCEMENTS</b><p class="m">Just now · ${S.user.name}</p><p style="margin-top:8px">${p.t.replace(/</g, '&lt;')}</p></div>`).join('')}
  <div class="card" style="margin-top:20px"><b>ANNOUNCEMENTS</b><p class="m">Today, 9:30 AM</p><h3 style="margin:8px 0">Welcome to ${c.n}!</h3><p class="m">We'll use this space for important announcements, resources, and course updates.</p><a style="float:right" onclick="alert('Reply sent')">Reply</a></div>
  ${as.slice(0, 1).map(a => `<div class="card" style="margin-top:20px"><b>ASSIGNMENTS</b><p class="m">Yesterday, 2:15 PM</p><h3 style="margin:8px 0">${a.n}</h3><p class="m">${a.d}</p><a class="btn o" style="margin-top:10px;padding:6px 12px" href="#/assignment/${a.id}">View Assignment →</a></div>`).join('')}
  ${rs.slice(0, 1).map(r => `<div class="card" style="margin-top:20px"><b>LECTURES</b><p class="m">2 days ago</p><h3 style="margin:8px 0">${r[0]}</h3><p class="m">Review the recommended concepts before starting your next assignment.</p><a class="btn o" style="margin-top:10px;padding:6px 12px" href="#/resources">Open Resource →</a></div>`).join('')}`;
  if (t == 'classwork') body = `<div class="grid">${as.map(aCard).join('') || '<p class="m">No classwork yet.</p>'}</div><h2>Materials</h2>${rs.map(r => `<div class="card" style="margin-bottom:12px">${r[0]} <span class="pill">${r[2]}</span></div>`).join('')}`;
  if (t == 'people') body = `<h2>Teacher</h2><div class="row"><div class="av">${ini(c.t)}</div>${c.t}</div><h2>Classmates</h2>${['Ayesha Khan', 'Bilal Ahmed', 'Hira Noor', 'Usman Tariq', S.user.name].map(n => `<div class="row" style="padding:10px 0;border-bottom:1px solid var(--b)"><div class="av" style="width:36px;height:36px">${ini(n)}</div>${n}</div>`).join('')}`;
  return shell('My Classes', `<div class="banner"><h1>${c.n}</h1><small>${c.code} · Fall 2026</small></div><div class="card row" style="border-radius:0 0 8px 8px;justify-content:space-between"><div><div>${c.t}</div><small class="m">${c.code} · Fall 2026</small></div><div style="width:290px"><small class="m">Course Progress</small><div class="bar"><i style="width:${c.p}%"></i></div><small style="color:var(--p)">${c.p}%</small></div></div>${tab(id, t)}${body}`);
};
P['/assignments'] = () => shell('Assignments', `${head('Assignments', 'Everything due across your classes.')}<div class="grid" style="margin-top:24px">${A.map(a => aCard(a)).join('')}</div>`);
P['/assignment'] = id => {
  const a = A.find(x => x.id == id); if (!a) return P['404']();
  const d = S.done[id];
  return shell('Assignments', `<a href="#/class/${a.c}/classwork">← ${cls(a.c).n}</a><div class="top" style="margin-top:12px"><h1>${a.n}</h1><span class="pill ${d ? 'ok' : ''}">${d ? 'Turned in' : 'Assigned'}</span></div><p class="m">${a.pts} points · <span class="${a.off <= 1 ? 'warn' : ''}">${dueTxt(a.off)}</span></p>
  <div class="card" style="margin-top:20px"><h3>Instructions</h3><p class="m" style="margin-top:8px">${a.d}</p></div>
  <div class="card" style="margin-top:20px"><h3>Your work</h3><input type="file" style="margin:12px 0" ${d ? 'disabled' : ''}><textarea rows="3" placeholder="Add a private comment to your teacher"></textarea><button class="btn" style="margin-top:14px" id="sub">${d ? 'Unsubmit' : 'Turn in'}</button></div>`);
};
P['/resources'] = () => shell('My Classes', `${head('Resources', 'Class materials from all your classes.')}<div class="grid g2" style="margin-top:24px">${R.map(r => `<div class="card"><span class="pill">${r[2]}</span><h3 style="margin:10px 0 4px">${r[0]}</h3><p class="m">${cls(r[1]).n}</p></div>`).join('')}</div>`);
P['/announcements'] = () => shell('Dashboard', `${head('Announcements', 'Latest updates from your classes.')}<div class="grid" style="margin-top:24px">${C.map((c, i) => `<div class="card"><b>${c.n}</b> <span class="m">· ${['Today, 9:30 AM', 'Yesterday', '2 days ago'][i]}</span><p class="m" style="margin-top:6px">${['Welcome to the course! Check the stream for updates.', 'Lab session moved to Thursday.', 'Midterm syllabus has been posted.'][i]}</p></div>`).join('')}</div>`);

let cm = new Date(); cm.setDate(1);
P['/calendar'] = () => {
  const y = cm.getFullYear(), m = cm.getMonth(), first = cm.getDay(), n = new Date(y, m + 1, 0).getDate(), t = new Date();
  let cells = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => `<div class="h">${d}</div>`).join('') + '<div></div>'.repeat(first);
  for (let d = 1; d <= n; d++) {
    const ev = A.filter(a => { const x = day(a.off); return x.getDate() == d && x.getMonth() == m && x.getFullYear() == y });
    cells += `<div class="${t.getDate() == d && t.getMonth() == m && t.getFullYear() == y ? 'today' : ''}">${d}${ev.map(a => `<a class="ev" href="#/assignment/${a.id}">${a.n}</a>`).join('')}</div>`;
  }
  return shell('Calendar', `${head('Calendar', 'Deadlines across all your classes.')}<div class="row" style="margin:24px 0;justify-content:space-between"><button class="btn o" id="pm">←</button><h2 style="margin:0">${cm.toLocaleString('en', { month: 'long', year: 'numeric' })}</h2><button class="btn o" id="nm">→</button></div><div class="cal">${cells}</div>`);
};
P['/todo'] = () => shell('To-Do', `${head('To-Do', 'Small tasks, big progress.')}<div class="card row" style="margin:24px 0"><input id="nt" placeholder="Add a task..."><button class="btn" id="add">Add</button></div><div class="card">${S.todos.map((t, i) => `<div class="todo ${t.d ? 'done' : ''}"><input type="checkbox" ${t.d ? 'checked' : ''} data-t="${i}"><span style="flex:1">${t.t.replace(/</g, '&lt;')}</span><a data-x="${i}">✕</a></div>`).join('') || '<p class="m">Nothing here. Enjoy the calm.</p>'}</div>`);
P['/grades'] = () => shell('Grades', `${head('Grades & Progress', 'How you are doing in each class.')}<div class="card" style="margin-top:24px"><table><tr><th>Class</th><th>Progress</th><th>Grade</th></tr>${C.map(c => `<tr><td><a href="#/class/${c.id}">${c.n}</a></td><td style="width:35%"><div class="bar"><i style="width:${c.p}%"></i></div></td><td><b>${c.g}%</b></td></tr>`).join('')}</table></div><p class="m" style="margin-top:16px">Overall average: <b>${Math.round(C.reduce((s, c) => s + c.g, 0) / C.length)}%</b></p>`);
P['/profile'] = () => shell('Profile', `${head('Profile', 'Your account details.')}<div class="card row" style="margin-top:24px"><div class="av" style="width:72px;height:72px;font-size:22px">${ini(S.user.name)}</div><div><h3>${S.user.name}</h3><p class="m">${S.user.role} · ${S.user.email}</p></div></div><h2>Enrolled classes</h2>${C.map(c => `<div class="card" style="margin-bottom:10px">${c.n}</div>`).join('')}`);
const tg = k => `<div class="tg ${S.prefs[k] ? 'on' : ''}" data-p="${k}"></div>`;
P['/settings'] = () => shell('Settings', `${head('Settings', 'Manage your account and preferences.')}<div class="card" style="margin-top:24px"><label style="margin-top:0">Full Name</label><input id="sn" value="${S.user.name}"><label>Email</label><input id="se" value="${S.user.email}"><button class="btn" style="margin-top:16px" id="ss">Save changes</button></div>
<div class="card" style="margin-top:20px">${[['email', 'Email notifications'], ['deadline', 'Deadline reminders'], ['dark', 'Dark mode (coming soon)']].map(p => `<div class="row" style="justify-content:space-between;padding:10px 0">${p[1]}${tg(p[0])}</div>`).join('')}</div><button class="btn o" style="margin-top:20px" id="lo">Log out</button>`);
P['/help'] = () => shell('Help', `${head('Help Center', 'Answers to common questions.')}<div class="card" style="margin-top:24px">${[['How do I join a class?', 'Go to My Classes and enter the class code from your teacher.'], ['How do I submit an assignment?', 'Open the assignment, attach your file, then press Turn in.'], ['Can I unsubmit my work?', 'Yes, until your teacher grades it press Unsubmit.'], ['How do I change my details?', 'Open Settings and edit your name or email.']].map(f => `<details><summary>${f[0]}</summary><p class="m" style="margin-top:8px">${f[1]}</p></details>`).join('')}</div>`);
const legal = (t, ps) => () => `<div class="nav">${logo()}<a class="btn o" href="#/">Back home</a></div><div class="page"><h1>${t}</h1><p>Last updated: 2026</p>${ps.map(p => `<p>${p}</p>`).join('')}</div>`;
P['/privacy'] = legal('Privacy Policy', ['We collect only the information needed to run your classroom: your name, email, and coursework.', 'We never sell your data. You can request deletion of your account at any time from Settings.', 'Your data is stored securely and shared only with your teachers and classmates as needed.']);
P['/terms'] = legal('Terms of Use', ['By using Classly you agree to use it for lawful, educational purposes.', 'You are responsible for the content you post and for keeping your account secure.', 'We may update these terms; continued use means you accept the changes.']);
P['404'] = () => `<div class="load"><img class="logo" style="height:44px" src="logo.png"><h1 style="font-size:72px;color:var(--p)">404</h1><h3>Page Not Found</h3><p class="m">The page you are looking for doesn't exist or has moved.</p><a class="btn" href="#/dashboard">Back to Dashboard</a></div>`;

/* interactions */
function bind(route, arg, tb) {
  const go = $('#go'), ok = (id, msg) => { $(id).textContent = msg; return !msg };
  if (route == '/signup') {
    $('#role').onclick = e => { if (e.target.parentNode.id == 'role') { [...$('#role').children].forEach(x => x.classList.remove('on')); e.target.classList.add('on') } };
    go.onclick = () => {
      const n = fn.value.trim(), m = em.value.trim(), okAll = [ok('#e1', n ? '' : 'Please enter your name'), ok('#e2', /^\S+@\S+\.\S+$/.test(m) ? '' : 'Enter a valid email'), ok('#e3', pa.value.length >= 8 ? '' : 'Use at least 8 characters'), ok('#e4', pa.value == pc.value ? '' : 'Passwords do not match')].every(Boolean);
      if (okAll) { S.user = { name: n, email: m, role: $('#role .on').textContent }; save('user', S.user); location.hash = '/loading' }
    };
  }
  if (route == '/login') go.onclick = () => { if (!/^\S+@\S+\.\S+$/.test(em.value) || !pa.value) return e1.textContent = 'Enter your email and password'; location.hash = '/loading' };
  if (route == '/loading') { let w = 5; const t = setInterval(() => { w += 9; if (!$('#lb')) return clearInterval(t); $('#lb').style.width = w + '%'; if (w >= 100) { clearInterval(t); location.hash = '/dashboard' } }, 180) }
  if (route == '/class' && tb == 'stream' || route == '/class' && !tb) $('#post').onclick = () => { const v = pt.value.trim(); if (v) { S.posts.unshift({ c: arg, t: v }); render() } };
  if (route == '/assignment') $('#sub').onclick = () => { S.done[arg] = !S.done[arg]; save('done', S.done); render() };
  if (route == '/calendar') { pm.onclick = () => { cm.setMonth(cm.getMonth() - 1); render() }; nm.onclick = () => { cm.setMonth(cm.getMonth() + 1); render() } }
  if (route == '/todo') {
    const add = () => { const v = nt.value.trim(); if (v) { S.todos.push({ t: v, d: 0 }); save('todos', S.todos); render() } };
    $('#add').onclick = add; nt.onkeydown = e => e.key == 'Enter' && add();
    document.querySelectorAll('[data-t]').forEach(c => c.onchange = () => { S.todos[c.dataset.t].d ^= 1; save('todos', S.todos); render() });
    document.querySelectorAll('[data-x]').forEach(x => x.onclick = () => { S.todos.splice(x.dataset.x, 1); save('todos', S.todos); render() });
  }
  if (route == '/settings') {
    $('#ss').onclick = () => { S.user.name = sn.value || S.user.name; S.user.email = se.value; save('user', S.user); render() };
    document.querySelectorAll('[data-p]').forEach(t => t.onclick = () => { S.prefs[t.dataset.p] ^= 1; save('prefs', S.prefs); t.classList.toggle('on') });
    $('#lo').onclick = () => location.hash = '/';
  }
}
function render() {
  const h = location.hash.replace(/^#/, '') || '/', [, r, a, b] = h.split('/'), route = '/' + (r || '');
  if (h == 'features' || h == 'how') return document.getElementById(h)?.scrollIntoView({ behavior: 'smooth' });
  const f = P[route] || P['404'];
  root.innerHTML = f(a, b); scrollTo(0, 0);
  document.title = 'Classly — ' + (route == '/' ? 'A Smarter Way to Learn, Together' : (r || 'Home')[0].toUpperCase() + (r || '').slice(1));
  bind(route, a, b);
}
addEventListener('hashchange', render); render();