# Pronto Agendei Design System
## Introduction

Welcome to the Pronto Agendei Design System. This library provides a set of reusable UI components to help you build consistent and beautiful user interfaces for your applications.

## About Pronto Agendei

Somos a Pronto Agendei, uma plataforma digital que conecta praticantes de esportes a quadras esportivas, facilitando o agendamento de reservas para gestores e usuários.

### For Managers

A Pronto Agendei é uma plataforma digital que facilita a gestão de reservas de quadras esportivas, conectando gestores a praticantes de esportes e automatizando seus agendamentos, proporcionando maior eficiência e economia de tempo para os gestores.

### For Users

A Pronto Agendei é uma plataforma digital que simplifica o agendamento de quadras esportivas para praticantes, facilitando sua reserva de horários em menos de um minuto.

## Installation

To install the design system, you can use npm or yarn:

### Using yarn
```bash
yarn add @pronto-agendei/design-system
```

### Using npm
```bash
npm install @pronto-agendei/design-system
```

## Usage

To use the components in your project, import them as follows:

```jsx
import { Button, TextInput } from '@pronto-agendei/design-system';

function App() {
    return (
        <div>
            <Button variant="primary">Click me</Button>
            <TextInput placeholder="Enter text" />
        </div>
    );
}
```