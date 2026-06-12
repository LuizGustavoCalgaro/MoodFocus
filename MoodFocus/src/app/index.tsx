import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {

  const [tempo, setTempo] = useState(0);
  const [dica, setDica] = useState("");
  const [rodando, setRodando] = useState(false);

  function escolherClasse(classe: string) {

    setRodando(false);

    if (classe === "guerreiro") {
      setTempo(50 * 60);
      setDica("🛡️ Você possui grande resistência. Prepare-se para uma longa batalha!");
    }

    if (classe === "mago") {
      setTempo(40 * 60);
      setDica("🧙 Sua inteligência será sua maior arma. Concentre sua mana.");
    }

    if (classe === "arqueiro") {
      setTempo(20 * 60);
      setDica("🏹 Ataques rápidos e precisos. Mantenha o foco.");
    }

    if (classe === "assassino") {
      setTempo(15 * 60);
      setDica("🗡️ Missão silenciosa. Cada segundo importa.");
    }
  }

  useEffect(() => {

    let intervalo: any;

    if (rodando && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo((valor) => valor - 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);

  }, [rodando, tempo]);

  function formatarTempo() {

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    return `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        ⚔️ GuildFocus
      </Text>

      <Text style={styles.subtitulo}>
        Escolha sua classe para a missão
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => escolherClasse("guerreiro")}
      >
        <Text style={styles.textoBotao}>🛡️ Guerreiro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => escolherClasse("mago")}
      >
        <Text style={styles.textoBotao}>🧙 Mago</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => escolherClasse("arqueiro")}
      >
        <Text style={styles.textoBotao}>🏹 Arqueiro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => escolherClasse("assassino")}
      >
        <Text style={styles.textoBotao}>🗡️ Assassino</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>
        ⏳ Tempo da missão
      </Text>

      <Text style={styles.tempo}>
        {formatarTempo()}
      </Text>

      <Text style={styles.dica}>
        {tempo === 0 && dica !== ""
          ? "🏆 Quest concluída!\n\n+250 XP\n\nVocê evoluiu de nível!"
          : dica}
      </Text>

      <View style={styles.linha}>

        <TouchableOpacity
          style={styles.iniciar}
          onPress={() => setRodando(true)}
        >
          <Text style={styles.textoBotao}>⚔️ Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.pausar}
          onPress={() => setRodando(false)}
        >
          <Text style={styles.textoBotao}>🏕️ Descansar</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.reiniciar}
        onPress={() => {
          setRodando(false);
          setTempo(0);
          setDica("");
        }}
      >
        <Text style={styles.textoBotao}>🔄 Nova Quest</Text>
      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1B1B2F",
  },

  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },

  botao: {
    backgroundColor: "#6B4226",
    width: 280,
    padding: 15,
    margin: 7,
    borderRadius: 12,
    alignItems: "center",
  },

  textoBotao: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  resultado: {
    marginTop: 30,
    fontSize: 22,
    color: "#FFD700",
    fontWeight: "bold",
  },

  tempo: {
    fontSize: 50,
    color: "#FFD700",
    fontWeight: "bold",
    marginTop: 10,
  },

  dica: {
    marginTop: 20,
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 20,
  },

  linha: {
    flexDirection: "row",
    marginTop: 25,
  },

  iniciar: {
    backgroundColor: "#2E8B57",
    padding: 12,
    margin: 5,
    borderRadius: 10,
  },

  pausar: {
    backgroundColor: "#556B2F",
    padding: 12,
    margin: 5,
    borderRadius: 10,
  },

  reiniciar: {
    backgroundColor: "#B8860B",
    padding: 12,
    marginTop: 15,
    borderRadius: 10,
  },

});