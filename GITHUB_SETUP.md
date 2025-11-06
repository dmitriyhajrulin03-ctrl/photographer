# Інструкції для публікації проєкту на GitHub

## Крок 1: Створіть репозиторій на GitHub

1. Перейдіть на [GitHub](https://github.com)
2. Натисніть кнопку "New" або "+" → "New repository"
3. Введіть назву репозиторію (наприклад: `photographer` або `johannpictures`)
4. Оберіть Public або Private
5. **НЕ** додавайте README, .gitignore або LICENSE (вони вже є в проєкті)
6. Натисніть "Create repository"

## Крок 2: Ініціалізуйте Git у вашому проєкті

Відкрийте термінал у папці проєкту та виконайте:

```bash
# Ініціалізуйте git репозиторій
git init

# Додайте всі файли
git add .

# Зробіть перший коміт
git commit -m "Initial commit: JOHANNPICTURES portfolio website"
```

## Крок 3: Підключіть до GitHub репозиторію

```bash
# Додайте remote (замініть YOUR_USERNAME та YOUR_REPO на ваші дані)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Перейменуйте гілку на main (якщо потрібно)
git branch -M main

# Відправте код на GitHub
git push -u origin main
```

## Крок 4: Налаштуйте GitHub Pages (опціонально)

Якщо хочете опублікувати сайт через GitHub Pages:

1. Перейдіть у Settings вашого репозиторію
2. Виберіть "Pages" у лівому меню
3. У "Source" оберіть "GitHub Actions"
4. Створіть файл `.github/workflows/deploy.yml` з наступним вмістом:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      - uses: actions/deploy-pages@v4
```

## Альтернатива: Deploy на Vercel (рекомендовано)

Найпростіший спосіб задеплоїти Next.js проєкт:

1. Перейдіть на [Vercel](https://vercel.com)
2. Увійдіть через GitHub
3. Натисніть "Add New Project"
4. Оберіть ваш репозиторій
5. Налаштуйте environment variables (якщо потрібно)
6. Натисніть "Deploy"

Vercel автоматично:
- Задеплоїть ваш проєкт
- Надасть HTTPS домен
- Налаштує автоматичний деплой при кожному push

## Важливо перед публікацією

1. Перевірте, що `.env.local` файл не потрапить у репозиторій (він вже в .gitignore)
2. Перевірте, що немає чутливих даних у коді
3. Оновіть інформацію в `src/config/site.ts` якщо потрібно
4. Перевірте, що всі посилання працюють

## Після публікації

1. Оновіть README.md з правильним посиланням на ваш репозиторій
2. Додайте опис проєкту на GitHub
3. Додайте теги (tags) для кращого пошуку
4. Налаштуйте GitHub Actions для автоматичного деплою (опціонально)

