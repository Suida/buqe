import { contextBridge, ipcRenderer } from "electron";

export type Channels = 'set-title';

contextBridge.exposeInMainWorld('electron', {
  setTitle: (title: string) => ipcRenderer.send('set-title', title),
})
