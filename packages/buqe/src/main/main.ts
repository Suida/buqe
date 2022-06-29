import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

import { resolveHtmlURL } from '@main/utils';

function createWindow() {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlURL('index.html'));
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win?.setTitle(title);
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

app.on('window-all-closed', () => {
  if (process.platform === 'darwin') app.quit();
})

