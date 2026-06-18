# SoftLuna Design System

SoftLuna usa a direcao visual **Lunar Day**: light mode premium, superficies brancas, cinza lunar sutil, linhas estruturais de 1px e acento champagne. O sistema foi pensado para uma software house e estudio de engenharia web que precisa comunicar rigor tecnico sem perder luxo minimalista.

Este pacote e uma fonte tecnica para migracoes futuras. Ele nao altera a aparencia atual do site ate que `softluna.css` ou `tailwind.extend.js` sejam importados manualmente.

## Principios

- Light mode primeiro: branco puro para respiro e cinza lunar para contraste.
- Hierarquia por espaco, tipografia e bordas finas, sem sombras pesadas.
- Alvos clicaveis com minimo de 44px.
- Escala geometrica: 8, 16, 24, 44 e 70px.
- Tipografia aberta: Geist para display/interface e Inter para leitura.
- Tracking tecnico ativo em `0px`; micro-ajustes negativos podem ser explorados visualmente em composicoes editoriais, mas nao entram nos tokens base para preservar compatibilidade com as regras do projeto.

## Parte 1: Design Tokens JSON

```json
{
  "$schema": "https://softluna.design/schemas/design-tokens.v1.json",
  "brand": {
    "name": "SoftLuna",
    "system": "Lunar Day",
    "description": "Light mode premium para uma software house de alta performance: branco amplo, linhas finas, rigor de engenharia e acento champagne."
  },
  "color": {
    "background": {
      "value": "#FFFFFF",
      "type": "color",
      "usage": "Secoes principais, superficies limpas e areas de leitura."
    },
    "backgroundSecondary": {
      "value": "#F5F5F7",
      "type": "color",
      "usage": "Blocos de contraste, bento grids e areas editoriais suaves."
    },
    "textPrimary": {
      "value": "#111111",
      "type": "color",
      "usage": "Titulos, textos principais e interfaces de alta legibilidade."
    },
    "textSecondary": {
      "value": "#6E6E73",
      "type": "color",
      "usage": "Descricoes, labels, metadados e textos de apoio."
    },
    "accent": {
      "value": "#C5A065",
      "type": "color",
      "usage": "Acoes primarias, detalhes de prestigio e destaques pontuais."
    },
    "accentHover": {
      "value": "#B38F54",
      "type": "color",
      "usage": "Hover, foco e estados ativos de componentes primarios."
    },
    "borderThin": {
      "value": "#E5E7EB",
      "type": "color",
      "usage": "Divisorias, inputs, cards e linhas estruturais de 1px."
    },
    "white": {
      "value": "#FFFFFF",
      "type": "color",
      "usage": "Texto sobre botoes primarios e superficies puras."
    }
  },
  "typography": {
    "fontFamily": {
      "display": {
        "value": "'Geist', 'Inter', system-ui, sans-serif",
        "type": "fontFamily"
      },
      "body": {
        "value": "'Inter', 'Geist', system-ui, sans-serif",
        "type": "fontFamily"
      }
    },
    "fontWeight": {
      "regular": {
        "value": 400,
        "type": "fontWeight"
      },
      "medium": {
        "value": 500,
        "type": "fontWeight"
      },
      "semibold": {
        "value": 600,
        "type": "fontWeight"
      },
      "bold": {
        "value": 700,
        "type": "fontWeight"
      }
    },
    "scale": {
      "h1": {
        "fontSize": "48px",
        "lineHeight": "58px",
        "fontWeight": 700,
        "letterSpacing": "0px"
      },
      "h2": {
        "fontSize": "40px",
        "lineHeight": "52px",
        "fontWeight": 700,
        "letterSpacing": "0px"
      },
      "h3": {
        "fontSize": "32px",
        "lineHeight": "40px",
        "fontWeight": 600,
        "letterSpacing": "0px"
      },
      "h4": {
        "fontSize": "24px",
        "lineHeight": "32px",
        "fontWeight": 600,
        "letterSpacing": "0px"
      },
      "bodyLarge": {
        "fontSize": "19px",
        "lineHeight": "30px",
        "fontWeight": 400,
        "letterSpacing": "0px"
      },
      "body": {
        "fontSize": "17px",
        "lineHeight": "27px",
        "fontWeight": 400,
        "letterSpacing": "0px"
      },
      "bodySmall": {
        "fontSize": "15px",
        "lineHeight": "24px",
        "fontWeight": 400,
        "letterSpacing": "0px"
      },
      "label": {
        "fontSize": "13px",
        "lineHeight": "18px",
        "fontWeight": 600,
        "letterSpacing": "0px"
      }
    }
  },
  "spacing": {
    "xs": {
      "value": "8px",
      "type": "dimension"
    },
    "sm": {
      "value": "16px",
      "type": "dimension"
    },
    "md": {
      "value": "24px",
      "type": "dimension"
    },
    "lg": {
      "value": "44px",
      "type": "dimension"
    },
    "xl": {
      "value": "70px",
      "type": "dimension"
    }
  },
  "radius": {
    "none": {
      "value": "0px",
      "type": "dimension"
    },
    "card": {
      "value": "12px",
      "type": "dimension"
    },
    "pill": {
      "value": "980px",
      "type": "dimension"
    }
  },
  "border": {
    "thin": {
      "width": "1px",
      "style": "solid",
      "color": "{color.borderThin.value}"
    }
  },
  "shadow": {
    "none": {
      "value": "none",
      "type": "shadow"
    }
  },
  "sizing": {
    "targetMin": {
      "value": "44px",
      "type": "dimension",
      "usage": "Altura e largura minima de alvos clicaveis."
    },
    "container": {
      "value": "1200px",
      "type": "dimension",
      "usage": "Largura maxima padrao para conteudo institucional."
    },
    "containerWide": {
      "value": "1440px",
      "type": "dimension",
      "usage": "Largura maxima para composicoes amplas e bento grids."
    }
  },
  "component": {
    "buttonPrimary": {
      "background": "{color.accent.value}",
      "color": "{color.white.value}",
      "border": "none",
      "borderRadius": "{radius.pill.value}",
      "minHeight": "{sizing.targetMin.value}",
      "paddingInline": "{spacing.md.value}"
    },
    "buttonSecondary": {
      "background": "transparent",
      "color": "{color.textPrimary.value}",
      "border": "1px solid {color.textPrimary.value}",
      "borderRadius": "{radius.pill.value}",
      "minHeight": "{sizing.targetMin.value}",
      "paddingInline": "{spacing.md.value}"
    },
    "card": {
      "background": "{color.background.value}",
      "border": "1px solid {color.borderThin.value}",
      "borderRadius": "{radius.card.value}",
      "boxShadow": "{shadow.none.value}"
    },
    "input": {
      "background": "{color.background.value}",
      "color": "{color.textPrimary.value}",
      "border": "1px solid {color.borderThin.value}",
      "borderRadius": "{radius.card.value}",
      "minHeight": "{sizing.targetMin.value}"
    },
    "focusRing": {
      "outline": "2px solid {color.accent.value}",
      "outlineOffset": "2px"
    }
  }
}
```

## Parte 2: CSS com Custom Properties

```css
:root {
  --sl-color-background: #ffffff;
  --sl-color-background-secondary: #f5f5f7;
  --sl-color-text-primary: #111111;
  --sl-color-text-secondary: #6e6e73;
  --sl-color-accent: #c5a065;
  --sl-color-accent-hover: #b38f54;
  --sl-color-border-thin: #e5e7eb;
  --sl-color-white: #ffffff;

  --sl-font-display: 'Geist', 'Inter', system-ui, sans-serif;
  --sl-font-body: 'Inter', 'Geist', system-ui, sans-serif;

  --sl-font-weight-regular: 400;
  --sl-font-weight-medium: 500;
  --sl-font-weight-semibold: 600;
  --sl-font-weight-bold: 700;

  --sl-text-h1-size: 48px;
  --sl-text-h1-line-height: 58px;
  --sl-text-h1-weight: 700;
  --sl-text-h1-letter-spacing: 0px;

  --sl-text-h2-size: 40px;
  --sl-text-h2-line-height: 52px;
  --sl-text-h2-weight: 700;
  --sl-text-h2-letter-spacing: 0px;

  --sl-text-h3-size: 32px;
  --sl-text-h3-line-height: 40px;
  --sl-text-h3-weight: 600;
  --sl-text-h3-letter-spacing: 0px;

  --sl-text-h4-size: 24px;
  --sl-text-h4-line-height: 32px;
  --sl-text-h4-weight: 600;
  --sl-text-h4-letter-spacing: 0px;

  --sl-text-body-large-size: 19px;
  --sl-text-body-large-line-height: 30px;
  --sl-text-body-size: 17px;
  --sl-text-body-line-height: 27px;
  --sl-text-body-small-size: 15px;
  --sl-text-body-small-line-height: 24px;
  --sl-text-label-size: 13px;
  --sl-text-label-line-height: 18px;

  --sl-spacing-xs: 8px;
  --sl-spacing-sm: 16px;
  --sl-spacing-md: 24px;
  --sl-spacing-lg: 44px;
  --sl-spacing-xl: 70px;

  --sl-radius-none: 0px;
  --sl-radius-card: 12px;
  --sl-radius-pill: 980px;

  --sl-border-thin-width: 1px;
  --sl-shadow-none: none;

  --sl-size-target-min: 44px;
  --sl-size-container: 1200px;
  --sl-size-container-wide: 1440px;
}

.sl-surface {
  background: var(--sl-color-background);
  color: var(--sl-color-text-primary);
  font-family: var(--sl-font-body);
}

.sl-surface-secondary {
  background: var(--sl-color-background-secondary);
}

.sl-container {
  width: min(100% - calc(var(--sl-spacing-md) * 2), var(--sl-size-container));
  margin-inline: auto;
}

.sl-container-wide {
  width: min(100% - calc(var(--sl-spacing-md) * 2), var(--sl-size-container-wide));
  margin-inline: auto;
}

.sl-heading-1,
.sl-heading-2,
.sl-heading-3,
.sl-heading-4 {
  color: var(--sl-color-text-primary);
  font-family: var(--sl-font-display);
  letter-spacing: 0;
  margin: 0;
}

.sl-heading-1 {
  font-size: var(--sl-text-h1-size);
  font-weight: var(--sl-text-h1-weight);
  line-height: var(--sl-text-h1-line-height);
}

.sl-heading-2 {
  font-size: var(--sl-text-h2-size);
  font-weight: var(--sl-text-h2-weight);
  line-height: var(--sl-text-h2-line-height);
}

.sl-heading-3 {
  font-size: var(--sl-text-h3-size);
  font-weight: var(--sl-text-h3-weight);
  line-height: var(--sl-text-h3-line-height);
}

.sl-heading-4 {
  font-size: var(--sl-text-h4-size);
  font-weight: var(--sl-text-h4-weight);
  line-height: var(--sl-text-h4-line-height);
}

.sl-body {
  color: var(--sl-color-text-secondary);
  font-family: var(--sl-font-body);
  font-size: var(--sl-text-body-size);
  font-weight: var(--sl-font-weight-regular);
  line-height: var(--sl-text-body-line-height);
  margin: 0;
}

.sl-button {
  align-items: center;
  border-radius: var(--sl-radius-pill);
  cursor: pointer;
  display: inline-flex;
  font-family: var(--sl-font-display);
  font-size: var(--sl-text-body-small-size);
  font-weight: var(--sl-font-weight-semibold);
  justify-content: center;
  line-height: 1;
  min-height: var(--sl-size-target-min);
  min-width: var(--sl-size-target-min);
  padding-inline: var(--sl-spacing-md);
  text-decoration: none;
  transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease;
}

.sl-button:focus-visible,
.sl-input:focus-visible {
  outline: 2px solid var(--sl-color-accent);
  outline-offset: 2px;
}

.sl-button-primary {
  background: var(--sl-color-accent);
  border: 0;
  color: var(--sl-color-white);
}

.sl-button-primary:hover {
  background: var(--sl-color-accent-hover);
}

.sl-button-secondary {
  background: transparent;
  border: var(--sl-border-thin-width) solid var(--sl-color-text-primary);
  color: var(--sl-color-text-primary);
}

.sl-button-secondary:hover {
  border-color: var(--sl-color-accent-hover);
  color: var(--sl-color-accent-hover);
}

.sl-card {
  background: var(--sl-color-background);
  border: var(--sl-border-thin-width) solid var(--sl-color-border-thin);
  border-radius: var(--sl-radius-card);
  box-shadow: var(--sl-shadow-none);
  color: var(--sl-color-text-primary);
  padding: var(--sl-spacing-md);
}

.sl-input {
  background: var(--sl-color-background);
  border: var(--sl-border-thin-width) solid var(--sl-color-border-thin);
  border-radius: var(--sl-radius-card);
  color: var(--sl-color-text-primary);
  font-family: var(--sl-font-body);
  font-size: var(--sl-text-body-size);
  line-height: var(--sl-text-body-line-height);
  min-height: var(--sl-size-target-min);
  padding-inline: var(--sl-spacing-sm);
}
```

## Parte 3: Tailwind theme.extend

Use o objeto abaixo dentro de `theme.extend` quando a migracao visual comecar. Ele tambem esta disponivel em `tailwind.extend.js`.

```js
module.exports = {
  colors: {
    softluna: {
      background: "#FFFFFF",
      "background-secondary": "#F5F5F7",
      "text-primary": "#111111",
      "text-secondary": "#6E6E73",
      accent: "#C5A065",
      "accent-hover": "#B38F54",
      "border-thin": "#E5E7EB",
      white: "#FFFFFF"
    }
  },
  fontFamily: {
    "softluna-display": ["Geist", "Inter", "system-ui", "sans-serif"],
    "softluna-body": ["Inter", "Geist", "system-ui", "sans-serif"]
  },
  fontSize: {
    "softluna-h1": [
      "48px",
      {
        lineHeight: "58px",
        letterSpacing: "0px",
        fontWeight: "700"
      }
    ],
    "softluna-h2": [
      "40px",
      {
        lineHeight: "52px",
        letterSpacing: "0px",
        fontWeight: "700"
      }
    ],
    "softluna-h3": [
      "32px",
      {
        lineHeight: "40px",
        letterSpacing: "0px",
        fontWeight: "600"
      }
    ],
    "softluna-h4": [
      "24px",
      {
        lineHeight: "32px",
        letterSpacing: "0px",
        fontWeight: "600"
      }
    ],
    "softluna-body-lg": [
      "19px",
      {
        lineHeight: "30px",
        letterSpacing: "0px",
        fontWeight: "400"
      }
    ],
    "softluna-body": [
      "17px",
      {
        lineHeight: "27px",
        letterSpacing: "0px",
        fontWeight: "400"
      }
    ],
    "softluna-body-sm": [
      "15px",
      {
        lineHeight: "24px",
        letterSpacing: "0px",
        fontWeight: "400"
      }
    ],
    "softluna-label": [
      "13px",
      {
        lineHeight: "18px",
        letterSpacing: "0px",
        fontWeight: "600"
      }
    ]
  },
  spacing: {
    "softluna-xs": "8px",
    "softluna-sm": "16px",
    "softluna-md": "24px",
    "softluna-lg": "44px",
    "softluna-xl": "70px"
  },
  borderRadius: {
    "softluna-none": "0px",
    "softluna-card": "12px",
    "softluna-pill": "980px"
  },
  borderWidth: {
    "softluna-thin": "1px"
  },
  boxShadow: {
    "softluna-none": "none"
  },
  minHeight: {
    "softluna-target": "44px"
  },
  minWidth: {
    "softluna-target": "44px"
  },
  maxWidth: {
    "softluna-container": "1200px",
    "softluna-container-wide": "1440px"
  }
};
```

## Componentes base

- `Button Primary`: fundo `#C5A065`, texto branco, sem borda, pilula de `980px`, minimo `44px`.
- `Button Secondary`: transparente, borda `1px` em `#111111`, texto `#111111`, pilula de `980px`.
- `Card`: fundo branco, borda `1px` em `#E5E7EB`, raio `12px`, sombra `none`.
- `Input`: fundo branco, borda `1px`, raio `12px`, altura minima `44px` e foco por outline champagne.

## Uso futuro

Quando a migracao da interface comecar, importe `softluna.css` no entrypoint global ou mescle `tailwind.extend.js` em `tailwind.config.js`. Ate la, estes arquivos funcionam como guia de marca e fonte tecnica versionada.
