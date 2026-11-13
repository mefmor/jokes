const SUPABASE_URL = 'https://zqpgbfqjcyoapzmhxwfe.supabase.co';
const SUPABASE_KEY = 'sb_publishable_52EbF02v7RgyPDqKGdE4FQ_C0Td-Vab';

// Инициализация клиента
const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchNotes() {
  const listElement = document.getElementById('notes-list');

  // Асинхронный запрос к таблице notes
  const { data, error } = await client
    .from('notes')
    .select('title');

  if (error) {
    listElement.innerHTML = `<li>Ошибка: ${error.message}</li>`;
    return;
  }

  // Очищаем надпись "Загрузка данных..." и выводим строки из БД
  listElement.innerHTML = '';
  data.forEach(note => {
    const li = document.createElement('li');
    li.textContent = note.title;
    listElement.appendChild(li);
  });
}

fetchNotes();
