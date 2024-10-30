Com base nos arquivos de stories que você enviou, aqui está uma integração no README com exemplos de uso para cada um dos componentes, seguindo um padrão claro e consistente. Esses exemplos ajudam outros desenvolvedores a entender como utilizar cada componente na prática.

---

# Pronto Agendei Design System

## 📖 Introdução

Bem-vindo ao **Pronto Agendei Design System**. Esta biblioteca oferece uma coleção de componentes reutilizáveis de UI e estilos consistentes para construir interfaces agradáveis e funcionais.

---

## 📦 Instalação

Instale o design system usando **npm** ou **yarn**:

### Usando yarn
```bash
yarn add @pronto-agendei/design-system
```

### Usando npm
```bash
npm install @pronto-agendei/design-system
```

---

## 💻 Exemplos de Uso (Stories)

Aqui estão exemplos de cada componente do Design System para que você possa visualizar seu funcionamento e personalizar conforme necessário.

### 1. Avatar
Exibe um ícone de usuário ou imagem representativa.

```tsx
import { Avatar } from '@pronto-agendei/design-system';

export const AvatarStory = () => (
  <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="lg" />
);
```

---

### 2. Box
Cria uma estrutura contêiner para estilização e layout.

```tsx
import { Box } from '@pronto-agendei/design-system';

export const BoxStory = () => (
  <Box padding="lg" backgroundColor="primary">
    This is a Box component.
  </Box>
);
```

---

### 3. Button
Renderiza um botão com diferentes variações e estilos.

```tsx
import { Button } from '@pronto-agendei/design-system';

export const ButtonStory = () => (
  <Button variant="primary" onClick={() => alert('Clicked!')}>
    Click me
  </Button>
);
```

---

### 4. Checkbox
Renderiza um checkbox para seleção de opções.

```tsx
import { Checkbox } from '@pronto-agendei/design-system';

export const CheckboxStory = () => (
  <Checkbox label="Accept Terms" />
);
```

---

### 5. Heading
Renderiza um título para seções ou páginas.

```tsx
import { Heading } from '@pronto-agendei/design-system';

export const HeadingStory = () => (
  <Heading level={1}>This is a Heading</Heading>
);
```

---

### 6. Input
Cria um campo de entrada de texto.

```tsx
import { Input } from '@pronto-agendei/design-system';

export const InputStory = () => (
  <Input placeholder="Enter your name" />
);
```

---

### 7. MultiStep
Exibe um componente de etapas para processos multi-passos.

```tsx
import { MultiStep } from '@pronto-agendei/design-system';

export const MultiStepStory = () => (
  <MultiStep steps={3} currentStep={1} />
);
```

---

### 8. Select
Renderiza um campo de seleção com várias opções.

```tsx
import { Select } from '@pronto-agendei/design-system';

export const SelectStory = () => (
  <Select options={['Option 1', 'Option 2', 'Option 3']} />
);
```

---

### 9. Text
Componente para exibir texto estilizado.

```tsx
import { Text } from '@pronto-agendei/design-system';

export const TextStory = () => (
  <Text fontSize="md" color="secondary">
    This is a Text component.
  </Text>
);
```

---

### 10. TextArea
Campo de entrada para texto longo.

```tsx
import { TextArea } from '@pronto-agendei/design-system';

export const TextAreaStory = () => (
  <TextArea placeholder="Write your thoughts..." />
);
```

---

## 🎨 Tokens de Design

Para estilos consistentes, utilize nossos tokens de design como cores, espaçamentos e tipografia.

---

Esses exemplos completos facilitam o uso e compreensão dos componentes do Design System, e com a adição das stories, outros desenvolvedores podem testar e visualizar facilmente os componentes em ação. Se precisar de mais alguma personalização ou integração, é só avisar!