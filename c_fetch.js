
async function getProfile(username) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}`
    );

    const data = await res.json();

    console.log(`ชื่อ: ${data.name}`);
    console.log(`Repo สาธารณะ: ${data.public_repos}`);
    console.log(`สมัครเมื่อ: ${data.created_at}`);

  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error.message);
  }
}

getProfile("torvalds");
