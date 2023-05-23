import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  chainMenus.push({ header: 'LINKS' })
  chainMenus.push({
    title: 'Website',
    href: 'https://nolus.io',
    icon: 'CastIcon',
  })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://explorer.nolus.io/',
      icon: 'CompassIcon',
    })
  } else {
    chainMenus.push({
      title: 'Testnet Explorer',
      href: 'https://explorer-rila.nolus.io/',
      icon: 'CompassIcon',
    })
  }
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/nolus-protocol',
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Discord',
    href: 'https://discord.com/invite/nolus-protocol',
    icon: 'EyeIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/NolusProtocol',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Telegram',
    href: 'https://t.me/NolusProtocol',
    icon: 'SendIcon',
  })

  return chainMenus
}

export default processMenu()
