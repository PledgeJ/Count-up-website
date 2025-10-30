function update() {
    const now = luxon.DateTime.now().setZone('utc');
    updateTimeSince(now);
    updateIndividualTimeUnits(now);
}

function updateIndividualTimeUnits(now) {
    const deltaTimems = now - startDate;

    const seconds = deltaTimems / 1000;
    const hours = seconds / 3600;
    const days = hours / 24;

    document.querySelector(".in-days").textContent = `${Math.floor(10 * (days)) / 10} days`;
    document.querySelector(".in-hours").textContent = `${Math.floor(10 * (hours)) / 10} hours`;
    document.querySelector(".in-seconds").textContent = `${Math.floor(seconds)} seconds`;
}

function updateTimeSince(now) {
    const deltaTime = now.diff(startDate, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();

    document.getElementById("years").textContent = String(deltaTime.years);
    document.getElementById("months").textContent = String(deltaTime.months);
    document.getElementById("days").textContent = String(deltaTime.days);
    document.getElementById("hours").textContent = String(deltaTime.hours);
    document.getElementById("minutes").textContent = String(deltaTime.minutes);
    document.getElementById("seconds").textContent = String(Math.floor(deltaTime.seconds));
}

const startDate = luxon.DateTime.fromISO("2006-11-28T17:01:00", { zone: 'Europe/London' });
update();

setInterval(update, 1000)