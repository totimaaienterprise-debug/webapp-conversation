// このファイルは Next.js アプリの `public/` フォルダに配置してください。
// ビルド後は `https://<デプロイ先ドメイン>/chat-widget-embed.js` という URL で自動配信されます。
// 埋め込み先サイトでは、この URL を <script src="..."> として読み込むだけで動作します。
(() => {
  const defaultConfig = {
    url: '',
    launcherText: 'チャットで相談',
    closeText: 'チャットを閉じる',
    title: '〇〇クリニックAI',
    width: 600,
    height: 800,
    allow: 'clipboard-write; microphone; camera',
  }

  const config = Object.assign({}, defaultConfig, window.DifyChatWidget || {})

  if (!config.url) {
    console.error('[DifyChatWidget] `url` is required. Set `window.DifyChatWidget = { url: "https://your-app.vercel.app" }` before loading the embed script.')
    return
  }

  const widgetId = 'dify-chat-widget'
  if (document.getElementById(widgetId)) { return }

  const style = document.createElement('style')
  style.textContent = `
    #${widgetId} {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 2147483647;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 12px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    #${widgetId} iframe {
      width: min(${config.width}px, calc(100vw - 32px));
      height: min(${config.height}px, calc(100vh - 88px));
      border: 1px solid rgba(15, 23, 42, 0.08);
      border-radius: 16px;
      box-shadow: 0 15px 30px rgba(15, 23, 42, 0.18);
      background: #fff;
      transform: translateY(8px) scale(0.96);
      transform-origin: bottom right;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    #${widgetId}[data-open="true"] iframe {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0) scale(1);
    }
    #${widgetId} button {
      appearance: none;
      border: none;
      border-radius: 999px;
      padding: 12px 20px;
      background: #2563eb;
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 10px 25px rgba(37, 99, 235, 0.35);
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    }
    #${widgetId} button:hover {
      background: #1d4ed8;
      transform: translateY(-1px);
      box-shadow: 0 14px 28px rgba(37, 99, 235, 0.38);
    }
    #${widgetId} button:active {
      transform: translateY(0);
      box-shadow: 0 8px 18px rgba(37, 99, 235, 0.32);
    }
    @media (max-width: 480px) {
      #${widgetId} {
        bottom: 16px;
        right: 16px;
      }
      #${widgetId} button {
        padding: 10px 16px;
        font-size: 14px;
      }
    }
  `
  document.head.appendChild(style)

  const container = document.createElement('div')
  container.id = widgetId
  container.dataset.open = 'false'
  container.setAttribute('aria-live', 'polite')
  container.setAttribute('aria-label', config.title)

  const iframe = document.createElement('iframe')
  iframe.title = config.title
  iframe.allow = config.allow
  iframe.style.display = 'block'
  iframe.style.background = 'transparent'
  iframe.setAttribute('tabindex', '-1')

  const button = document.createElement('button')
  button.type = 'button'
  button.textContent = config.launcherText
  button.setAttribute('aria-expanded', 'false')
  button.setAttribute('aria-controls', `${widgetId}-frame`)

  iframe.id = `${widgetId}-frame`

  container.appendChild(iframe)
  container.appendChild(button)
  document.body.appendChild(container)

  let hasLoaded = false

  const openWidget = () => {
    if (!hasLoaded) {
      iframe.src = config.url
      hasLoaded = true
    }
    container.dataset.open = 'true'
    button.textContent = config.closeText
    button.setAttribute('aria-expanded', 'true')
    iframe.removeAttribute('tabindex')
  }

  const closeWidget = () => {
    container.dataset.open = 'false'
    button.textContent = config.launcherText
    button.setAttribute('aria-expanded', 'false')
    iframe.setAttribute('tabindex', '-1')
  }

  button.addEventListener('click', () => {
    const isOpen = container.dataset.open === 'true'
    if (isOpen) {
      closeWidget()
    }
    else {
      openWidget()
    }
  })

  if (config.autoOpen) {
    const delay = Number(config.autoOpenDelay || 0)
    window.setTimeout(openWidget, delay)
  }
})()
