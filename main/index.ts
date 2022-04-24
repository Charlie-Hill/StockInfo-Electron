import { app, BrowserWindow, shell } from "electron";
import isDev from "electron-is-dev";

async function createMainWindow(): Promise<BrowserWindow> {
  const win = new BrowserWindow({
    center: true,
    title: "LondonMarket Stock Quote Tool",
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: false,
      sandbox: true,
      contextIsolation: true,
      webSecurity: true,
    },
  });

  if (isDev) {
    await win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
  } else {
    await win.loadURL(
      `file://${(
        await import("path")
      ).default.join(__dirname, "../dist/index.html")}`
    );
  }

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' }
  });

  return win;
}

app.whenReady().then(async () => {
  await createMainWindow();
});
