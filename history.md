    1  ls
    2  apt update
    3  dnf update
    4  dnf update
    5  dnf install nano
    6  ls
    7  cd root/
    8  ls
    9  cd ..
   10  cd /usr/share/novnc/
   11  ls
   12  nano LICENSE.txt
   13  ls
   14  cd app/
   15  ls
   16  cp ui.js ui.js.bak
   17  > ui.js
   18  nano ui.js
   19  nano ui.js.bak
   20  nano ui.js
   21  nano ui.js.bak
   22  nano ui.js
   23  nano ui.js.bak
   24  cd ..
   25  ls
   26  cd core/
   27  cd input/
   28  ls
   29  nano uskeysym.js
   30  cd ..
   31  ls
   32  cp rfb.js rfb.js.bak
   33  > rfb.js
   34  nano rfb.js
   35  exit
   36  ls
   37  cd /usr/share/novnc/
   38  ls
   39  nano core/rfb.js
   40  exit
   41  cd /usr/share/novnc/
   42  ls
   43  nano cd app/
   44  cd app/
   45  ls
   46  cp webutil.js webutil.js.bak
   47  > webutil.js
   48  nano webutil.js
   49  exit
   50  cd /usr/share/novnc/
   51  ls
   52  nano app/webutil.js
   53  mv app/webutil.js.bak app/webutil.js
   54  nano app/webutil.js
   55  systemctl restart novnc
   56  service restart novnc
   57  exit
   58  cd /usr/share/novnc/
   59  nano app/webutil.js
   60  grep -rl WebUtil.fetchJSON
   61  nano app/ui.js
   62  grep -r WebUtil.fetchJSON
   63  cd ..
   64  ls
   65  nano novnc/
   66  cd novnc/
   67  ls
   68  nano app/ui.js
   69  nano app/ui.js
   70  exit
   71  history