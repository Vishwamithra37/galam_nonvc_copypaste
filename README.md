# Adding Working Clipboard Copy-Paste Functionality to NoVNC in OpenStack

## Overview

This guide explains how to add working clipboard copy-paste functionality to NoVNC in OpenStack deployments using Kolla-Ansible. The solution involves modifying specific NoVNC files to enable bidirectional clipboard operations between your local machine and the remote desktop. Probably may also work with proxmox.

## Modified Files

The following files have been modified to enable clipboard functionality:

- [**core/rfb.js** ](https://github.com/Vishwamithra37/galam_nonvc_copypaste/blob/CopyPasteWorking_NoVnc_OpenStack/core/rfb.js)- Core RFB protocol handler modifications
- [**core/input/uskeysym.js**](https://github.com/Vishwamithra37/galam_nonvc_copypaste/blob/CopyPasteWorking_NoVnc_OpenStack/core/input/keysym.js) - US keyboard symbol mapping enhancements
- [**app/ui.js**](https://github.com/Vishwamithra37/galam_nonvc_copypaste/blob/CopyPasteWorking_NoVnc_OpenStack/app/ui.js) - User interface modifications for clipboard controls
- [**app/webutils.js**](https://github.com/Vishwamithra37/galam_nonvc_copypaste/blob/CopyPasteWorking_NoVnc_OpenStack/app/webutil.js) - Web utility functions for clipboard operations

## Copy the above files

- Copy the above files and save them in /etc/kolla/config/novnc/<filepath>

Note: You can place these anywhere, you just need to give the correct path while adding in globals.yaml

## Source Repository

All modified files can be downloaded from: [https://github.com/Vishwamithra37/galam_nonvc_copypaste/tree/CopyPasteWorking_NoVnc_OpenStack](https://github.com/Vishwamithra37/galam_nonvc_copypaste/tree/CopyPasteWorking_NoVnc_OpenStack)

The repository contains the working copy-paste implementation for NoVNC OpenStack integration.

## Kolla-Ansible Integration

To deploy these modifications in a Kolla-Ansible environment, add the following to **/etc/kolla/globals.yml**:

```yaml
nova_novncproxy_extra_volumes:
  - "/etc/kolla/config/novnc/core/rfb.js:/usr/share/novnc/core/rfb.js"
  - "/etc/kolla/config/novnc/core/input/uskeysym.js:/usr/share/novnc/core/input/uskeysym.js"
  - "/etc/kolla/config/novnc/app/ui.js:/usr/share/novnc/app/ui.js"
  - "/etc/kolla/config/novnc/app/webutils.js:/usr/share/novnc/app/webutils.js"
```

And then
```sh
kolla-ansible -i <inventory> reconfigure
```
