import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white focus:(ring-2 ring-offset-2)'],
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-500 hover:bg-${c}-400 focus:ring-${c}-500`],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
