# asuntoremontti.fi — Astro-sivusto

SEO- ja mobiilioptimoitu staattinen sivusto Astro-frameworkilla.

## Miksi Astro

- **Staattinen HTML** = paras mahdollinen SEO ja Core Web Vitals -pisteet
- **Nolla JavaScriptia oletuksena** → nopea lataus mobiilissa
- **Markdown-blogi** → helppo lisätä artikkeleita
- **Komponenttiajattelu** → toistuvat osat (header, footer, lomake) yhdessä paikassa
- **Automaattinen sitemap** ja robots.txt

## Sivut

- `/` — Etusivu
- `/palvelut/` — Palveluiden hakemisto
- `/palvelut/keittioremontti-lahti/`
- `/palvelut/kylpyhuoneremontti-lahti/`
- `/palvelut/huoneistoremontti-lahti/`
- `/palvelut/saunaremontti-lahti/`
- `/palvelut/laatoitus-ja-vedeneristys-lahti/`
- `/alueet/` — Alueiden hakemisto
- `/alueet/remontti-hollola/`
- `/alueet/remontti-nastola/`
- `/alueet/remontti-orimattila/`
- `/alueet/remontti-heinola/`
- `/blogi/` — Blogin hakemisto
- `/blogi/[artikkeli]/` — Dynaamiset blogisivut
- `/yhteystiedot/`
- `/kiitos/` — Lomakkeen kiitossivu

## Asennus ja kehitys

Tarvitset Node.js 18.20.8+ tai 20.3.0+ tai 22+.

```bash
npm install
npm run dev
```

Sivusto avautuu osoitteessa `http://localhost:4321`.

## Tuotanto-buildi

```bash
npm run build
```

Valmis staattinen sivusto on `dist/`-hakemistossa. Voit ladata sen mihin tahansa staattiseen hostingiin (Netlify, Vercel, Cloudflare Pages, Hostinger, oma palvelin).

## Miten muokkaan sisältöä

### 1. Yhteystiedot, palvelut ja alueet — `src/data/site.ts`

**Kaikki keskeinen sisältö on tässä yhdessä tiedostossa.** Muokkaa:

- Puhelinnumero, sähköposti, osoite → näkyvät automaattisesti koko sivustolla
- Palveluiden sisältö, hinnat ja FAQ:t → luovat automaattisesti palvelusivut
- Alueiden tiedot ja postinumerot → luovat automaattisesti aluesivut
- Y-tunnus, perustamisvuosi, sosiaalinen media

⚠️ **Muista täydentää nämä `TÄYDENNÄ`-merkityt kentät ennen julkaisua:**
- `legalName` — virallinen yhtiönimi
- `address.street` — katunumero
- `vatId` — Y-tunnus muodossa `FI12345678`
- `foundingYear` — perustamisvuosi
- `social.*` — sosiaalisen median URLit (tai jätä tyhjäksi)

### 2. Etusivun otsikot ja lauseet — `src/pages/index.astro`

Muuta H1-otsikko, hero-teksti ja CTA-napit.

### 3. Blogiartikkelit — `src/content/blog/*.md`

Luo uusi tiedosto `src/content/blog/artikkelin-otsikko.md` muodossa:

```markdown
---
title: "Otsikko"
description: "Meta description"
publishDate: 2026-02-01
category: "Kategoria"
draft: false
---

Artikkelin sisältö markdownina...
```

### 4. Ulkoasu ja värit — `src/styles/global.css`

Kaikki värit ja typografia CSS-muuttujina tiedoston yläosassa (`:root`).

### 5. Header ja footer — `src/components/Header.astro`, `Footer.astro`

Navigaation linkit ja footerin sisältö.

## SEO-ominaisuudet

- ✅ Kaikilla sivuilla oma title ja meta description
- ✅ Canonical URL:t
- ✅ Open Graph ja Twitter Card
- ✅ LocalBusiness (HomeAndConstructionBusiness) schema
- ✅ Service schema per palvelusivu
- ✅ FAQPage schema (rich results)
- ✅ BreadcrumbList schema
- ✅ Article schema blogiartikkeleille
- ✅ Geo-metatiedot Lahden koordinaateilla
- ✅ Automaattinen sitemap.xml
- ✅ robots.txt
- ✅ Semantic HTML (header, main, article, section)
- ✅ Kuvat lazy-loadataan
- ✅ Preload-fontit
- ✅ Kompressoitu HTML

## Lomakkeen käyttöönotto

Lomake toimii **Netlify Forms** -yhteensopivana. Jos hostaat Netlifyssä:
1. `data-netlify="true"` attribuutti riittää — Netlify ottaa lähetykset vastaan automaattisesti
2. Lomakelähetykset näkyvät Netlifyn dashboardissa

Jos hostaat muualla, vaihda `src/components/ContactForm.astro`:
- **Formspree:** `action="https://formspree.io/f/SINUN_TUNNUS"`
- **Basin:** `action="https://usebasin.com/f/SINUN_TUNNUS"`
- **Oma backend:** oma endpoint

## Julkaisu

### Suositus: Netlify (ilmainen, nopein setup)

1. Työnnä koodi GitHubiin
2. Netlifyssä: "New site from Git" → valitse repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Yhdistä domain `asuntoremontti.fi`

### Vaihtoehdot

- **Vercel** — sama flow, `npm run build` + `dist`
- **Cloudflare Pages** — sama flow
- **Oma palvelin** — buildaa paikallisesti ja kopioi `dist/` palvelimelle

## Ennen julkaisua tarkistuslista

- [ ] Täydennä `src/data/site.ts`: Y-tunnus, katuosoite, perustamisvuosi
- [ ] Lisää oma logo (`public/favicon.svg`)
- [ ] Lisää Open Graph -kuva (`public/og.jpg`, koko 1200×630 px)
- [ ] Aseta oikeat sosiaalisen median linkit
- [ ] Vaihda lomakkeen action-URL jos ei Netlify
- [ ] Testaa lomake
- [ ] Rekisteröi/vahvista Google Business Profile Lahden osoitteella
- [ ] Lähetä sitemap Google Search Consoleen: `https://asuntoremontti.fi/sitemap-index.xml`
- [ ] Aseta Google Analytics tai Plausible (jos halutaan)
