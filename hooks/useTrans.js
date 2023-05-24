import { useRouter } from 'next/router'
import en from '../public/lang/en.json'
import vi from '../public/lang/vi.json'
import ja from '../public/lang/ja.json'
import kr from '../public/lang/kr.json'

const lang = {
    "en":en,
    "vi":vi,
    "ja":ja,
    "kr":kr,
}

const useTrans = () => {
    const { locale } = useRouter()
    const trans = lang[locale]

    return trans
}

export default useTrans
