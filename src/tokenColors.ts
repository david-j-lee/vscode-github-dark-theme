import { themes } from './themes';

const darkThemeTokens = [
  {
    scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
    settings: {
      foreground: '#6A737D',
    },
  },
  {
    scope: [
      'constant',
      'entity.name.constant',
      'variable.other.constant',
      'variable.language',
    ],
    settings: {
      foreground: '#58a6ff',
    },
  },
  {
    scope: ['entity', 'entity.name'],
    settings: {
      foreground: '#d2a8ff',
    },
  },
  {
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: '#79c0ff',
    },
  },
  {
    scope: 'variable.parameter',
    settings: {
      foreground: '#c9d1d9',
    },
  },
  {
    scope: 'variable.parameter.function',
    settings: {
      foreground: '#c9d1d9',
    },
  },
  {
    scope: 'entity.name.tag',
    settings: {
      foreground: '#7ee787',
    },
  },
  {
    scope: 'entity.name.type.module',
    settings: {
      foreground: '#ffa657',
    },
  },
  {
    scope: 'keyword',
    settings: {
      foreground: '#ff7b72',
    },
  },
  {
    scope: 'keyword.operator',
    settings: {
      foreground: '#79c0ff',
    },
  },
  {
    scope: ['storage', 'storage.type'],
    settings: {
      foreground: '#ff7b72',
    },
  },
  {
    scope: [
      'storage.modifier.package',
      'storage.modifier.import',
      'storage.type.java',
    ],
    settings: {
      foreground: '#c9d1d9',
    },
  },
  {
    scope: [
      'string',
      'punctuation.definition.string',
      'string punctuation.section.embedded source',
    ],
    settings: {
      foreground: '#a5d6ff',
    },
  },
  {
    scope: 'support',
    settings: {
      foreground: '#58a6ff',
    },
  },
  {
    scope: 'meta.property-name',
    settings: {
      foreground: '#58a6ff',
    },
  },
  {
    scope: 'variable',
    settings: {
      foreground: '#f0f6fc',
    },
  },
  {
    scope: 'variable.language.super',
    settings: {
      foreground: '#c9d1d9',
    },
  },
  {
    scope: 'variable.language.this',
    settings: {
      foreground: '#c9d1d9',
    },
  },
  {
    scope: 'variable.other',
    settings: {
      foreground: '#c9d1d9',
    },
  },
  {
    scope: 'variable.other.object.property',
    settings: {
      foreground: '#79c0ff',
    },
  },
  {
    scope: 'variable.other.property',
    settings: {
      foreground: '#79c0ff',
    },
  },
  {
    scope: 'variable.other.readwrite.alias',
    settings: {
      foreground: '#ffa657',
    },
  },
  {
    scope: 'invalid.broken',
    settings: {
      foreground: '#FDAEB7',
      fontStyle: 'italic',
    },
  },
  {
    scope: 'invalid.deprecated',
    settings: {
      foreground: '#FDAEB7',
      fontStyle: 'italic',
    },
  },
  {
    scope: 'invalid.illegal',
    settings: {
      foreground: '#FDAEB7',
      fontStyle: 'italic',
    },
  },
  {
    scope: 'invalid.unimplemented',
    settings: {
      foreground: '#FDAEB7',
      fontStyle: 'italic',
    },
  },
  {
    scope: 'carriage-return',
    settings: {
      foreground: '#0d1117',
      background: '#F97583',
      fontStyle: 'italic underline',
    },
  },
  {
    scope: 'message.error',
    settings: {
      foreground: '#FDAEB7',
    },
  },
  {
    scope: 'string source',
    settings: {
      foreground: '#c9d1d9',
    },
  },
  {
    scope: 'string variable',
    settings: {
      foreground: '#58a6ff',
    },
  },
  {
    scope: ['source.regexp', 'string.regexp'],
    settings: {
      foreground: '#DBEDFF',
    },
  },
  {
    scope: [
      'string.regexp.character-class',
      'string.regexp constant.character.escape',
      'string.regexp source.ruby.embedded',
      'string.regexp string.regexp.arbitrary-repitition',
    ],
    settings: {
      foreground: '#DBEDFF',
    },
  },
  {
    scope: 'string.regexp constant.character.escape',
    settings: {
      foreground: '#85E89D',
      fontStyle: 'bold',
    },
  },
  {
    scope: 'support.constant',
    settings: {
      foreground: '#58a6ff',
    },
  },
  {
    scope: 'support.variable',
    settings: {
      foreground: '#58a6ff',
    },
  },
  {
    scope: 'meta.module-reference',
    settings: {
      foreground: '#58a6ff',
    },
  },
  {
    scope: 'punctuation.definition.list.begin.markdown',
    settings: {
      foreground: '#FFAB70',
    },
  },
  {
    scope: ['markup.heading', 'markup.heading entity.name'],
    settings: {
      foreground: '#58a6ff',
      fontStyle: 'bold',
    },
  },
  {
    scope: 'markup.quote',
    settings: {
      foreground: '#85E89D',
    },
  },
  {
    scope: 'markup.italic',
    settings: {
      foreground: '#c9d1d9',
      fontStyle: 'italic',
    },
  },
  {
    scope: 'markup.bold',
    settings: {
      foreground: '#c9d1d9',
      fontStyle: 'bold',
    },
  },
  {
    scope: 'markup.raw',
    settings: {
      foreground: '#58a6ff',
    },
  },
  {
    scope: [
      'markup.deleted',
      'meta.diff.header.from-file',
      'punctuation.definition.deleted',
    ],
    settings: {
      foreground: '#FDAEB7',
      background: '#86181D',
    },
  },
  {
    scope: [
      'markup.inserted',
      'meta.diff.header.to-file',
      'punctuation.definition.inserted',
    ],
    settings: {
      foreground: '#85E89D',
      background: '#144620',
    },
  },
  {
    scope: ['markup.changed', 'punctuation.definition.changed'],
    settings: {
      foreground: '#FFAB70',
      background: '#C24E00',
    },
  },
  {
    scope: 'punctuation.definition.tag',
    settings: {
      foreground: '#79c0ff',
    },
  },
  {
    scope: ['markup.ignored', 'markup.untracked'],
    settings: {
      foreground: '#2F363D',
      background: '#58a6ff',
    },
  },
  {
    scope: 'meta.diff.range',
    settings: {
      foreground: '#B392F0',
      fontStyle: 'bold',
    },
  },
  {
    scope: 'meta.diff.header',
    settings: {
      foreground: '#58a6ff',
    },
  },
  {
    scope: 'meta.separator',
    settings: {
      foreground: '#58a6ff',
      fontStyle: 'bold',
    },
  },
  {
    scope: 'meta.output',
    settings: {
      foreground: '#58a6ff',
    },
  },
  {
    scope: 'meta.object-literal.key',
    settings: {
      foreground: '#58a6ff',
    },
  },
  {
    scope: [
      'brackethighlighter.tag',
      'brackethighlighter.curly',
      'brackethighlighter.round',
      'brackethighlighter.square',
      'brackethighlighter.angle',
      'brackethighlighter.quote',
    ],
    settings: {
      foreground: '#D1D5DA',
    },
  },
  {
    scope: 'brackethighlighter.unmatched',
    settings: {
      foreground: '#FDAEB7',
    },
  },
  {
    scope: ['constant.other.reference.link', 'string.other.link'],
    settings: {
      foreground: '#DBEDFF',
      fontStyle: 'underline',
    },
  },
  {
    scope: 'comment',
    settings: {
      foreground: '#8b949e',
    },
  },
  {
    scope: 'punctuation.definition.comment',
    settings: {
      foreground: '#8b949e',
    },
  },
  {
    scope: 'token.info-token',
    settings: {
      foreground: '#6796E6',
    },
  },
  {
    scope: 'token.warn-token',
    settings: {
      foreground: '#CD9731',
    },
  },
  {
    scope: 'token.error-token',
    settings: {
      foreground: '#F44747',
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      foreground: '#B267E6',
    },
  },
];

export const tokenColors: {
  [theme: (typeof themes)[number]['theme']]: object[];
} = {
  darkTheme: [...darkThemeTokens],
  darkBorderlessTheme: [...darkThemeTokens],
};
